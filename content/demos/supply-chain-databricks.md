---
title: "Optimize supply chain with Databricks and Neo4j"
blurb: "Multi-tier supplier risk and concentration analysis on your existing Databricks stack."
why_it_matters: |
  Lakehouse and graph as complementary, not competing. Customers running Databricks
  for analytics hit a wall when business asks "what happens if Tier-2 supplier X
  fails?" — that's a graph question, not a SQL question. This demo shows the clean
  handoff: Delta for facts, Neo4j for relationships, served back into the same UI.
partners: ["Databricks"]
industries: ["Pharma", "Logistics", "Manufacturing"]
patterns: ["Supply chain", "Graph algorithms"]
companion_tech: ["Databricks", "Delta Lake", "Kafka", "MLflow"]
author: "Pramod Borkar"
author_contact: "pramod.borkar@neo4j.com"
status: "demo"
featured: true
setup_time: "30 min"
demo_duration: "15 min"
last_tested: "2026-04-20"
prereqs:
  - "Neo4j Aura Free or 5.x local"
  - "Databricks workspace (Free or Community Edition)"
  - "Python 3.10+"
customer_questions:
  - "What's our exposure if a Tier-2 supplier goes down?"
  - "Show 3-hop dependencies for product Y"
  - "Where are concentration risks across regions?"
repo: "https://github.com/pnborkar/supply-chain-optimizer"
video: ""
---

## What this demo proves

Databricks is the system of record. Neo4j is the relationship engine. Together
they answer questions neither can answer alone.

## Demo script

1. Open the Databricks notebook. Show the Bronze → Silver → Gold medallion flow.
2. Switch to Neo4j Browser. Run the supplier-concentration query.
3. Pivot back to the Databricks dashboard, now enriched with graph signals.
4. Close with the "what-if" simulation.

## Talking points

- "Graph isn't a replacement for the lakehouse — it's the relationship layer on top."
- "The lakehouse stores what happened. The graph explains why it matters."
