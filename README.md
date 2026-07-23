# Accessible Ops

The properties that make infrastructure safe to hand off — to a new engineer or to an AI agent — so the judgment stays with a human and the rest is safe to delegate.

A short manifesto in the structure of [12factor.net](https://12factor.net/). A spec, not a product — seeded by Jake Gaylor's [Agent-Ready Infrastructure](https://jakegaylor.com/blog/posts/agent-ready-infrastructure/).

## Develop

Built with [Hugo](https://gohugo.io/).

```
hugo server        # local preview at http://localhost:1313
hugo               # build to ./public
```

## Structure

- `content/_index.md` — the intro (the onboarding test).
- `content/N-*.md` — one page per factor (`part: factor`).
- `content/1N-*.md` — the "beyond the factors" pages (`part: beyond`).
- `layouts/` — home, factor page, and shell templates.
- `static/css/style.css` — styling.

Set `baseURL` in `hugo.toml` before deploying to a real domain or a project-pages subpath.
