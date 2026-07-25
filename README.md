# Accessible Ops

The properties that make infrastructure safe to hand off — to a new engineer or to an AI agent — so the judgment stays with a human and the rest is safe to delegate.

A short manifesto in the structure of [12factor.net](https://12factor.net/). A spec, not a product — seeded by Jake Gaylor's [Agent-Ready Infrastructure](https://jakegaylor.com/blog/posts/agent-ready-infrastructure/) and Alex Artigues' [Honor the lower layer](https://lex00.github.io/posts/honor-the-lower-layer/).

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

## Analytics

PostHog (`layouts/partials/posthog.html`) loads only when a project API key is present. In production it's supplied by the `POSTHOG_API_KEY` repo variable (Settings → Secrets and variables → Actions → Variables), injected at build time as `HUGO_PARAMS_POSTHOGAPIKEY` in `.github/workflows/hugo.yml`. Local builds have no key set, so `hugo server` never sends events.
