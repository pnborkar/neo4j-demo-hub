# Neo4j Demo Hub

A filterable catalog of Neo4j integration demos for the SA org.

> Internal hub. Built by SAs, for SAs. Not an official Neo4j marketing property (yet).

## What this is

Every demo entry shows:

- **Discovery layer** — title, why it matters, partner ecosystem, industry, status
- **Enablement layer** — setup time, demo script, repo, video, talking points

Filter by partner (Databricks / GCP / AWS / Snowflake / Confluent) and industry.

## Quickstart

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new), import the repo
3. Accept defaults — Vercel auto-detects Next.js
4. Done. Subsequent pushes to `main` auto-deploy.

## Adding a demo

Each demo is a Markdown file in `content/demos/<slug>.md` with YAML frontmatter.
Copy `content/demos/supply-chain-databricks.md` as your starting point.

### Required fields

```yaml
title: "Your demo title"
blurb: "One sentence elevator pitch."
why_it_matters: |
  Two-to-three sentences. What does this prove? When do you pull it out?
partners: ["Databricks"]          # one or more
industries: ["Pharma", "Retail"]   # one or more
patterns: ["GraphRAG"]             # one or more
companion_tech: ["Delta Lake"]
author: "Your Name"
status: "production"               # production | beta | draft
featured: false                    # at most one featured demo at a time
```

### Recommended fields

```yaml
setup_time: "30 min"
demo_duration: "15 min"
last_tested: "2026-04-20"
prereqs:
  - "Neo4j Aura or 5.x local"
  - "Databricks workspace"
customer_questions:
  - "What's our exposure if Tier-2 supplier X fails?"
repo: "https://github.com/..."
video: "https://loom.com/..."
```

## Editorial principles

- **Why it matters is the gold field.** Every SA scans this before committing time. Make it concrete: what question does the demo answer, and when do you reach for it.
- **Customer questions answered** maps your demo to discovery notes. Phrase them in the customer's voice.
- **Status honestly.** A "production" demo means an SA can show it to a customer tomorrow without rehearsal. "Beta" means it works but needs the author present. "Draft" means scaffolding only.
- **`last_tested` matters.** Stale demos break in front of customers. Update on every successful run.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS for styling
- gray-matter + remark for MDX content
- Deployed on Vercel

## Roadmap

- v0.2: Multi-select filters, sort by last-tested
- v0.3: Search, contributor leaderboard
- v1.0: Marketing-blessed customer-facing view (subset of demos, separate route)
