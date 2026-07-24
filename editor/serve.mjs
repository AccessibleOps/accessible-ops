// Local content editor for Accessible Ops.
// Zero dependencies. Run: node editor/serve.mjs  (or `just edit`)
// Serves a browser UI on localhost and writes straight back to content/*.md.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "content");
const PORT = Number(process.env.PORT || 4747);

// Canonical field order for keys added to a file that didn't have them.
const FIELD_ORDER = ["title", "slug", "weight", "roman", "part", "summary"];

// ---------- frontmatter ----------

function parseFile(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { fields: [], body: raw.trim() };
  const fields = [];
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let [, key, val] = kv;
    if (/^".*"$/.test(val)) val = JSON.parse(val);
    else if (/^-?\d+$/.test(val)) val = Number(val);
    fields.push({ key, value: val });
  }
  return { fields, body: raw.slice(m[0].length).trim() };
}

function serializeFile(fields, body) {
  const lines = fields.map(({ key, value }) =>
    typeof value === "number" ? `${key}: ${value}` : `${key}: ${JSON.stringify(String(value))}`
  );
  const fm = `---\n${lines.join("\n")}\n---\n`;
  return body.trim() ? fm + "\n" + body.trim() + "\n" : fm;
}

// Merge edited values into the file's original key order; drop keys the user
// blanked out unless the file had them as intentionally empty, append new keys
// in canonical order.
function mergeFields(originalFields, edited) {
  const out = [];
  const seen = new Set();
  for (const { key } of originalFields) {
    if (key in edited) {
      seen.add(key);
      const v = edited[key];
      if (v === "" || v === null || v === undefined) continue; // blanked → drop
      out.push({ key, value: v });
    }
  }
  for (const key of [...FIELD_ORDER, ...Object.keys(edited)]) {
    if (seen.has(key) || !(key in edited)) continue;
    seen.add(key);
    const v = edited[key];
    if (v === "" || v === null || v === undefined) continue;
    out.push({ key, value: v });
  }
  return out;
}

// ---------- file access ----------

function safeContentPath(name) {
  if (!/^[\w][\w.-]*\.md$/.test(name)) return null;
  const p = path.join(CONTENT, name);
  return p.startsWith(CONTENT + path.sep) ? p : null;
}

function listFiles() {
  return fs
    .readdirSync(CONTENT)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const p = path.join(CONTENT, filename);
      const raw = fs.readFileSync(p, "utf8");
      const { fields, body } = parseFile(raw);
      return { filename, fields, body, mtimeMs: fs.statSync(p).mtimeMs };
    });
}

// ---------- server ----------

function json(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => (data += c));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  try {
    if (req.method === "GET" && url.pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fs.readFileSync(path.join(ROOT, "editor", "index.html")));
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/files") {
      json(res, 200, listFiles());
      return;
    }

    const fileMatch = url.pathname.match(/^\/api\/files\/([^/]+)$/);
    if (fileMatch) {
      const name = decodeURIComponent(fileMatch[1]);
      const p = safeContentPath(name);
      if (!p) return json(res, 400, { error: "bad filename" });

      if (req.method === "PUT") {
        const { edited, body, baseMtimeMs, create } = JSON.parse(await readBody(req));
        const exists = fs.existsSync(p);
        if (!exists && !create) return json(res, 404, { error: "no such file" });
        if (exists && create) return json(res, 409, { error: "file already exists" });
        let originalFields = [];
        if (exists) {
          if (baseMtimeMs && fs.statSync(p).mtimeMs > baseMtimeMs + 1) {
            return json(res, 409, {
              error: "file changed on disk since you loaded it — reload before saving",
            });
          }
          originalFields = parseFile(fs.readFileSync(p, "utf8")).fields;
        }
        const fields = mergeFields(originalFields, edited);
        fs.writeFileSync(p, serializeFile(fields, body));
        json(res, 200, { ok: true, mtimeMs: fs.statSync(p).mtimeMs, fields });
        return;
      }
    }

    json(res, 404, { error: "not found" });
  } catch (err) {
    json(res, 500, { error: String(err.message || err) });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Accessible Ops editor → http://localhost:${PORT}`);
  console.log(`Editing files in ${CONTENT}`);
});
