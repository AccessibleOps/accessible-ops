---
title: "Idempotent"
slug: "idempotent"
weight: 11
roman: "XI"
part: "factor"
summary: "If nothing changed, applying changes nothing."
---

Applying the same change twice should change nothing the second time. When neither the code nor the live system has moved, a deploy is a no-op, and the tool says so with an empty diff. A deploy that always ends with a web app and a database, but a fresh database every time, has not operated your system; it has replaced it with a lookalike. Idempotency is what makes retries safe, and retries are how newcomers and agents work: run it, doubt it, run it again. The empty diff is also the check itself, the way a stranger confirms that what is written matches what is running before touching anything.
