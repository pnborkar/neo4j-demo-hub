---
title: "Real-time entity resolution with Confluent"
blurb: "Kafka streams hit Neo4j for live entity matching and graph-side enrichment before they reach the warehouse."
why_it_matters: |
  Resolving "is this the same customer?" downstream is too late. This demo shows
  entity resolution at stream-time using Neo4j as the relationship index, with
  resolved IDs flowing into Databricks for analytics.
partners: ["Confluent", "Databricks"]
industries: ["Financial Services", "Retail"]
patterns: ["Streaming", "Entity resolution"]
companion_tech: ["Confluent Cloud", "Kafka", "Flink"]
author: "TBD"
status: "beta"
featured: false
setup_time: "50 min"
demo_duration: "15 min"
customer_questions:
  - "Can we resolve entities in real time, not in nightly batches?"
  - "How does this fit with our existing Kafka investment?"
---

## What this demo proves

Resolution at the edge of the pipeline, not at the destination. Faster, cheaper,
and the warehouse stays clean.
