---
title: "Accessible Ops"
---

## Introduction

DevOps tells us how to join development and operations in an organization. It does not tell us what good operations looks like once they are joined.

In the modern era, operating software is no longer an engineering concern alone. Everyone in the org ships and runs software. Agents contribute changes alongside engineers. Every team carries its own systems and its own patterns.

Accessible Ops is a short list of properties for that world. Hold them and operations stays a manageable task: infrastructure safe to hand off, to a new engineer or to an AI agent, so the judgment stays with a human and the rest is safe to delegate.

## Background

An agent is the newest hire. It reads what is written, works through the paths you give it, and touches what its credentials allow. What makes a new engineer safe in week one is what makes an agent safe.

This document synthesizes two essays pointed at the same idea. [Jake Gaylor's Agent-Ready Infrastructure](https://jakegaylor.com/blog/posts/agent-ready-infrastructure/) asked whether a competent stranger could operate your system on day one, from what is written down, through paths you can review, with consequences you can survive. [Alex Artigues' Honor the lower layer](https://lex00.github.io/posts/honor-the-lower-layer/) argued the half beneath it, that what a newcomer changes should be the platform's own spec, readable and predictable before it runs.

Each property is tagged with the outcome it buys, speed, confidence, transparency, repeatability, or disposability. The vocabulary is [Gregor Hohpe's](https://architectelevator.com/). The format is borrowed gratefully from [12factor.net](https://12factor.net/).

## Who should read this document?

Anyone who hands infrastructure to someone else, and anyone who receives it. Engineers who build and run systems. Teams putting agents to work on their infrastructure. Leads deciding what is safe to delegate and what still waits for a human.
