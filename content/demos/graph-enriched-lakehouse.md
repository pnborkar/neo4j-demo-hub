---
title: "Graph-Enriched Lakehouse"
blurb: "Neo4j GDS runs as a silver-to-gold enrichment stage inside a Databricks Lakehouse, writing graph features back as plain Delta columns. The analytics stack stays unchanged."
why_it_matters: |
  Most Databricks customers don't want a new platform — they want their existing
  one to answer harder questions. This pattern positions Neo4j as a step in the
  medallion flow, not a separate system. Silver tables flow into Neo4j as a
  property graph, GDS algorithms run, and the results land back in Gold as
  scalar columns: risk_score, community_id, similarity_score. Genie, SQL
  warehouses, dashboards, and downstream ML read them like any other column.
  Nothing downstream changes. The catalog gains dimensions it could not carry
  before.
partners: ["Databricks"]
industries: ["Financial Services", "Pharma", "Retail", "Manufacturing"]
patterns: ["Graph-enriched lakehouse", "Graph algorithms", "GenAI"]
companion_tech: ["Databricks", "Delta Lake", "Unity Catalog", "Genie", "Neo4j Aura", "Neo4j GDS"]
author: "Pramod Naidu"
author_contact: "pramod.naidu@neo4j.com"
status: "production"
featured: true
setup_time: "30 min"
demo_duration: "20 min"
last_tested: "2026-04-26"
prereqs:
  - "Databricks workspace with Unity Catalog (Community Edition works)"
  - "Neo4j Aura instance (free tier is sufficient for the demo dataset)"
  - "Python 3.10+ for the automated path; Jupyter cluster for the workshop path"
customer_questions:
  - "Which accounts are central hubs in our transaction network?"
  - "Which groups of accounts move money tightly among themselves?"
  - "How does portfolio composition look when we segment by community?"
  - "Can we compare cohorts across risk tiers without rewriting our BI stack?"
repo: "https://github.com/neo4j-partners/graph-enriched-lakehouse"
---