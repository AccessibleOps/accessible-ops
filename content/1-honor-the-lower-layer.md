---
title: "Honor the lower layer"
slug: "honor-the-lower-layer"
weight: 1
roman: "I"
part: "factor"
summary: "Know the platform underneath, and build on it in the platform's own terms."
---

Honoring the lower layer means the operator knows how the platform underneath actually works, and builds on top of it in a way that is natural to that platform. Whatever you stack above it, the platform's own spec should stay where a newcomer can see it. On Kubernetes, the real thing is the manifest; a templating layer that never shows you the rendered manifests has cut you off from what is actually running. On AWS, CloudFormation is the platform's own record, and if you cannot say what your code becomes in it, you are in trouble before anything breaks.

The test is prediction. A competent stranger should be able to read the source and say what the platform will be told to do, then check afterward that it was told exactly that. Tools that compile to the platform's spec make this easy: one artifact, in the platform's own terms, and nothing behind it. Tools that wrap the platform in a second model, with its own state and its own drift, make it nearly impossible, because now there are two systems to learn and only one of them is real.

You do not have to write the lower layer by hand. You do have to be able to look at it, and nothing you build on top should take that away.
