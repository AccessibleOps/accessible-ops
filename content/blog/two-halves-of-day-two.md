---
title: "The two halves of day two"
date: 2026-07-24
slug: "two-halves-of-day-two"
aliases: ["/a-compiler-has-no-day-two/"]
description: "The onboarding test runs on day one and every day after. Day two is authoring and applying, and the factors test both."
---

[Jake Gaylor](https://jakegaylor.com/blog/posts/agent-ready-infrastructure/) put the onboarding test plainly. Could a competent stranger operate your system on day one, from what is written down, through paths you can review, with consequences you can survive? The stranger is a person or an agent. Both have to onboard, and the question does not change between them.

Day one is the easy half to picture. The stranger reads the source and makes a change. That only works when the source sits on the platform's own spec, honored rather than reimplemented, so what they read is what ships and they can predict it before anything runs. [Honor the lower layer](/honor-the-lower-layer/) is that property. With it, authoring stops being a discipline of its own, because the thing you edit is the thing that runs.

The test is day one and every day after, and every day after is a second job. A change has to apply. It runs against a live system, where steps fail halfway, some actions cannot be taken back, and some should wait for a person to say yes. That is execution, and execution needs an executor, one that retries, gates, and keeps a record of what ran. Honoring the lower layer gives you the first job and none of the second.

Accessible Ops is the test for both. The synthesis factors ask whether the stranger can predict the spec before it runs. The lifecycle factors ask whether the risky change stops for a human and the reversible one goes through. A system a stranger can operate on day one, and on every day after, is one that answered both.
