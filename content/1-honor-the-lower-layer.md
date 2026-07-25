---
title: "Honor the lower layer"
slug: "honor-the-lower-layer"
weight: 1
roman: "I"
part: "factor"
summary: "Build in the platform's own terms, and keep its spec readable and predictable before anything runs."
---

The operator knows how the platform underneath works. Whatever you stack on top, the platform's own spec stays in view. On Kubernetes, the real thing is the manifest, so the rendered manifests stay where a newcomer can read them. On AWS, CloudFormation is the platform's own record, so you can say what your code becomes in that record.

The test is prediction before anything runs. A competent stranger reads the source and says what the platform will be told to do, and is right, from the text alone. The same source always produces the same spec, worked out from what you can read and only that, and settled before the platform is touched.

Writing the lower layer by hand is optional. What counts is the property, whatever shape the tool takes. Build as high as you like on top, as long as the spec stays readable and predictable before it runs.
