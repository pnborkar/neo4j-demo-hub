---
title: "GraphRAG with Vertex AI on GCP"
blurb: "Ground foundation models in a Neo4j knowledge graph to reduce hallucinations on entity-rich queries."
why_it_matters: |
  Vector search alone misses relationships. Customers running Vertex AI agents
  on dense entity domains — drug interactions, regulatory dependencies, supply
  chains — see hallucination rates drop sharply when the model retrieves graph
  context, not just chunk embeddings.
partners: ["GCP"]
industries: ["Pharma", "Financial Services"]
patterns: ["GraphRAG", "GenAI"]
companion_tech: ["Vertex AI", "BigQuery", "Cloud Run"]
author: "TBD"
status: "beta"
featured: false
setup_time: "45 min"
demo_duration: "12 min"
prereqs:
  - "GCP project with Vertex AI enabled"
  - "Neo4j Aura instance"
customer_questions:
  - "How do we reduce hallucinations on technical domains?"
  - "Can we use our existing Vertex AI investment with a knowledge graph?"
---

## What this demo proves

Vector search + graph traversal beats vector search alone on entity-rich
questions. Same model, same prompt — better answers because the retrieval is
relationship-aware.
