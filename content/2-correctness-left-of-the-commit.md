---
title: "The same check, left of the commit"
slug: "correctness-left-of-the-commit"
aliases: ["/same-feedback-guides-both/"]
weight: 2
roman: "II"
part: "factor"
summary: "Know a change works at the keystroke, the same check for a human and an agent."
---

A change should prove itself at the keystroke, where the operator is still writing it. When correctness lives in a static check over the source, the editor draws a red squiggle for a human and the language server hands the same diagnostic to an agent. Both learn the valid move before the change goes anywhere, and it is the same check doing the work for each of them. Push that check into CI and the feedback moves to the most expensive place it can live, a full pipeline run after the commit. The earlier it fires, the cheaper the correction, and the keystroke is as early as it gets.
