---
title: "Recommendation engine on the lakehouse"
blurb: "Behavioral data in Delta, similarity and pathfinding in Neo4j, served via MLflow."
why_it_matters: |
  Collaborative filtering plateaus. Graph-aware recommendations — people who
  bought X *via path Y* also liked Z — beat flat similarity once you factor in
  product hierarchies, social graphs, or co-occurrence relationships.
partners: ["Databricks"]
industries: ["Retail"]
patterns: ["Recommendations", "Graph algorithms"]
companion_tech: ["Databricks", "Delta Lake", "MLflow"]
author: "TBD"
status: "beta"
featured: false
setup_time: "35 min"
demo_duration: "12 min"
customer_questions:
  - "Why graph for recommendations? We already have a model."
  - "How do we serve graph-based recs at scale?"
---

## What this demo proves

Graph adds the "why" to recommendation. The lakehouse stores the data, the
model serves it, the graph explains the path.
