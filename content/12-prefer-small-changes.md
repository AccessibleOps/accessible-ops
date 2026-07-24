---
title: "Prefer small changes"
slug: "prefer-small-changes"
weight: 12
roman: "XII"
part: "factor"
summary: "A large change is many small changes in disguise."
---

A large change is many small changes in disguise. Landing them one at a time means each is verified before the next builds on it, which is the infrastructure equivalent of integrating often. Every factor above gets cheaper as the change gets smaller: the diff is easier to review, the blast radius easier to bound, the rollback easier to trust. A big change is where errors hide and where trouble reaches the business, so the safest way for a newcomer, human or agent, to arrive is in small steps.
