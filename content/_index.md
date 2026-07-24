---
title: "Accessible Ops"
---

Accessible Ops is a short list of properties that make infrastructure safe to hand off, to a new engineer or to an AI agent, so the judgment stays with a human and the rest is safe to delegate.

Arguments about AI agents in operations get easier once you stop treating the agent as special. An agent is the newest hire. It reads what is written, works through the paths you give it, touches what its credentials allow, and asks when it is unsure. The uncomfortable part is that a lot of infrastructure was not safe to hand a new hire either. We hid that behind the fact that new hires are slow and cautious, and there were rarely many of them at once.

Jake Gaylor put the test plainly in [Agent-Ready Infrastructure](https://jakegaylor.com/blog/posts/agent-ready-infrastructure/). Could a competent stranger operate your system on day one, using only what is written down, through paths you can review, with consequences you can survive? That is the test, and it does not care whether the stranger is a person or a model. The properties that make a new engineer productive and safe in week one are the properties that make an agent safe.

We are wary of the phrase agentic ops. An agent reading an error and picking a tool is the old kind of operation done faster, with the judgment calls easier to surface to a human. What follows is the set of properties that make operations accessible, for a person or an agent.
