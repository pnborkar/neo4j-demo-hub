---
title: "Agentic fraud investigation with Bedrock"
blurb: "Bedrock agents call Neo4j for multi-hop entity resolution and ring detection in transaction graphs."
why_it_matters: |
  Fraud rings hide in second and third-degree relationships. Investigators need
  agents that can hop the graph, not just retrieve documents. This demo shows
  Bedrock agents using Neo4j as a tool — querying paths, running community
  detection, returning structured evidence chains.
partners: ["AWS"]
industries: ["Financial Services"]
patterns: ["Fraud", "GenAI", "Graph algorithms"]
companion_tech: ["Bedrock", "Lambda", "Glue"]
author: "TBD"
status: "production"
featured: false
setup_time: "60 min"
demo_duration: "10 min"
customer_questions:
  - "How do we use GenAI for fraud without losing explainability?"
  - "Can an agent investigate a case end-to-end?"
---

## What this demo proves

LLMs are not the investigator — they're the interface. Neo4j does the actual
graph work. The agent just translates natural language into traversals and
formats the evidence chain.
