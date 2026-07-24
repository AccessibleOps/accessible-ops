---
title: "Move correctness checks left of the commit"
slug: "correctness-left-of-the-commit"
aliases: ["/same-feedback-guides-both/"]
weight: 2
roman: "II"
part: "factor"
summary: "Know the change works at the keystroke, not from CI."
---

The operator should know a change will work before committing it, not learn it from CI afterward. When the rules are a static check over the source, the editor draws a red squiggle for a human and the language server hands the same diagnostic to an agent; both learn the valid move at the keystroke, before the change goes anywhere. A pipeline that finds the problem after the push has moved the feedback to the most expensive place it can live. A rule that only lives in a reviewer's head sits even further right, and a machine cannot read a reviewer's head at all.
