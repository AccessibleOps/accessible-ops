---
title: "Honor the lower layer"
slug: "honor-the-lower-layer"
weight: 1
roman: "I"
part: "factor"
summary: "A real language compiled to the platform's own spec, and fixed enough to check without running."
---

Honoring the lower layer takes two things, and most tools stop after the first.

First, the source is a real language compiled down to the platform's own spec, not a second model wrapped around it. A wrapper carries its own state, so a newcomer has to reason about the wrapper, the state, and the drift between them. A compiler leaves one honest artifact, the platform's own spec, with nothing behind it.

Second, that artifact is fixed by the source alone, so it can be checked without running anything. A tool that produces its spec by executing your program has the first property and not the second — you cannot see what it will emit until it runs. When the output is a pure function of the source, what a newcomer reads is what ships, and they can read it before anything runs.

Most abstractions clear the first line. Clearing both is what separates a compiler from a program that happens to print infrastructure.
