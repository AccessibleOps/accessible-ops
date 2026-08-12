---
title: "About"
slug: "about"
aliases: ["/where-this-comes-from/"]
---

Accessible Ops is a short list of properties that make infrastructure safe to hand off, to a new engineer or to an AI agent, so the judgment stays with a human and the rest is safe to delegate.

An agent is the newest hire. It reads what is written, works through the paths you give it, and touches what its credentials allow. What makes a new engineer safe in week one is what makes an agent safe.

The list came together from two essays pointed at the same idea. [Jake Gaylor's Agent-Ready Infrastructure](https://jakegaylor.com/blog/posts/agent-ready-infrastructure/) asked whether a competent stranger could operate your system on day one, from what is written down, through paths you can review, with consequences you can survive. [Alex Artigues' Honor the lower layer](https://lex00.github.io/posts/honor-the-lower-layer/) argued the half beneath it, that what a newcomer changes should be the platform's own spec, readable and predictable before it runs. The format is borrowed gratefully from [12factor.net](https://12factor.net/).

Each property is tagged with the outcome it buys, speed, confidence, transparency, repeatability, or disposability. The vocabulary is [Gregor Hohpe's](https://architectelevator.com/). A property here usually earns more than one tag.
