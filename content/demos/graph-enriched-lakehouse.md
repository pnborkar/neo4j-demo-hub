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
author: "Ryan Knight
author_contact: "ryan.knight@neo4j.com"
status: "demo"
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
video: ""
---

## What this demo proves

Network topology becomes columns. That's the whole thesis.

The Finance Genie demo runs in two spaces — **Before** and **After** — against
the same Databricks Genie interface, the same questions, the same SQL
warehouse. The only thing that changes is whether the Gold tables have been
through the GDS enrichment stage.

In the Before space, Genie handles standard BI cleanly: account balances,
transfer volumes, top merchants. Then the questions shift toward network
structure — *which accounts are central hubs?*, *which groups move money tightly
among themselves?* Genie answers the question it can answer with the data it
has, not the question that was asked. **Transfer volume is not network
centrality. No amount of SQL over flat rows produces eigenvector centrality.**
The gap is genuine.

In the After space, GDS has already done the structural work. Three columns
land in Gold:

- `risk_score` — PageRank eigenvector centrality
- `community_id` — Louvain community partition
- `similarity_score` — Jaccard overlap of shared-merchant sets

These are **features with published mathematical definitions, not fraud
verdicts**. The analyst, investigator, or downstream model adjudicates. Genie
reads them the same way it reads any other column. A different class of
question is now answerable: portfolio composition by community, cohort
comparisons across risk tiers, community rollups, operational workload by
region, merchant-side analysis conditioned on structural membership.

## Why customers care

- **Coexistence, not migration.** Lakehouse stays the lakehouse. Genie stays Genie. SQL stays SQL.
- **Unity Catalog is the integration point.** Reads from Silver, writes to Gold. Standard medallion semantics.
- **Auditable features, not black boxes.** Every enrichment column maps to a published algorithm, which matters for FSI compliance and pharma validation.
- **Genie gets smarter without retraining.** The LLM didn't change. The catalog did.

## Demo script

1. **Start in the Before space.** Open Genie. Ask: *"What are the top 10 accounts by transfer volume?"* Answer is clean. Trust is established.
2. **Push into network territory.** Ask: *"Which accounts are central hubs in the network?"* Genie returns transfer-volume leaders. Pause and name the gap: this is degree by activity, not centrality by structure.
3. **Switch to the After space.** Same Genie. Same question. Now the answer uses `risk_score`. Show the SQL Genie generated — it's selecting on the new column like any other.
4. **Cohort comparison.** Ask: *"Compare community 7 to community 12 on average balance and merchant diversity."* Show that Genie now does cohort analysis along structural dimensions that did not exist before.
5. **Close with the architecture.** Pull up the diagram. Silver → Neo4j → Gold. Three new columns. Nothing else changed.

## Talking points

- *"We're not replacing your lakehouse. We're a stage in your medallion pipeline."*
- *"The algorithms are deterministic and published — PageRank, Louvain, Jaccard. These are features, not fraud verdicts. Your analysts adjudicate."*
- *"Genie didn't get smarter. The catalog gained dimensions it couldn't carry before."*
- **Objection: "Why not just compute this in Spark?"** Spark can run graph algorithms, but at scale and with iteration depth, native graph engines are an order of magnitude faster, and GDS gives you 60+ production-grade algorithms out of the box. The pattern is about division of labor: lakehouse does what lakehouses do well, graph does what graphs do well.
- **Objection: "Another system to manage?"** Neo4j Aura is managed. The pipeline is a stage, not a platform. From the Databricks operator's perspective, it's a job that reads Silver and writes Gold.

## Workshop vs automated

The repo has two paths that map to two delivery contexts:

- `workshop/` — interactive Jupyter notebooks for live, in-person demo delivery on a dedicated Databricks cluster. Walks through each pipeline stage in sequence.
- `automated/` — CLI-driven Python scripts that run the same pipeline as unattended Databricks Jobs. Used for one-time setup, secret config, and automated validation of Genie Space quality after GDS runs.

Pick the workshop path for live customer demos. Pick the automated path when you need to provision a demo environment for a customer to explore on their own time.
