---
title: "Honor the lower layer"
slug: "honor-the-lower-layer"
weight: 1
roman: "I"
part: "factor"
summary: "Know the platform underneath, build on it in its own terms, and be able to predict its spec before anything runs."
---

Honoring the lower layer means the operator knows how the platform underneath works, and builds on it in the platform's own terms. Whatever you stack on top, the platform's own spec stays in view. On Kubernetes, the real thing is the manifest, so the rendered manifests stay where a newcomer can read them. On AWS, CloudFormation is the platform's own record, so you can say what your code becomes in that record.

The test is prediction before anything runs. A competent stranger reads the source and says what the platform will be told to do, and is right, from the text alone. The same source always produces the same spec, folded from what you can read and only that, and settled before the platform is touched. A compiler earns this by doing the work at build, evaluating and folding as it goes, so the answer is fixed by the time you look.

Writing the lower layer by hand is optional. Reading it and predicting it before it runs is the requirement, and any tool that settles the spec from the source can meet it. Build as high as you like on top, as long as it keeps that within reach.
