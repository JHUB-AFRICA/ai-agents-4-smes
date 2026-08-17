# GoKleva

GoKleva is an AI agents platform that automates routine operational workflows for small and medium-sized enterprises (SMEs). Built for the MP-30 “AI Agents for SMEs” initiative at JHUB Africa, GoKleva focuses on Transport as the primary industry use case and demonstrates cross-industry scalability (e.g., Healthcare).

## Problem statement
SMEs in Transport struggle with fragmented scheduling, manual routing decisions, and slow response to exceptions (delays, cancellations, re-bookings). These gaps increase cost, reduce utilization, and create poor customer experience. GoKleva automates routing, booking, and exception handling with lightweight, configurable AI agents so SMEs can operate more efficiently without large engineering teams.

## Key features
- Orchestrated AI agents for task automation (routing, booking, triage, data extraction)
- Pluggable connectors for carriers, booking systems, and messaging platforms
- Scenario templates for Transport (freight/passenger) and Healthcare triage
- REST API and CLI for triggering and monitoring agent flows
- Lightweight persistence and audit logs (SQLite/Postgres configurable)
- Observability: Prometheus metrics and structured JSON logs
- Privacy-first design: secrets via env/secret manager and data pseudonymization options

## Tech stack / architecture overview
GoKleva is modular: agents (task logic), an orchestrator (flow control), connectors (external adapters), and a small persistence layer. It exposes a REST API and a CLI for integration. See ARCHITECTURE.md for a detailed diagram and component responsibilities.

## Quick start
Prerequisites
- Git
- Docker & Docker Compose (recommended) or language runtimes for local run
- (Optional) Postgres for production-like runs

Installation and environment setup
1. Clone the repo:
   - git clone https://github.com/JHUB-AFRICA/ai-agents-4-smes.git
   - cd ai-agents-4-smes
2. Copy example environment and edit:
   - cp .env.example .env
   - Edit .env to set DB_URL, API keys, and other connector configs
3. Start using Docker Compose (recommended):
   - docker compose up --build -d

Running locally (without Docker)
- Follow language-specific README files in modules. Example (Python parts):
  - python -m venv .venv && source .venv/bin/activate
  - pip install -r requirements.txt
  - export FLASK_ENV=development (or set relevant env vars)
  - ./cli/run_local (or see api/README.md)

## Basic usage example
Trigger a freight routing scenario via the API (example):

curl -X POST http://localhost:8000/v1/agents/run \
  -H "Content-Type: application/json" \
  -d '{"scenario":"freight_routing","input":{"origin":"NBO","destination":"MBA","weight":1200}}'

Check status:

curl http://localhost:8000/v1/agents/{run_id}/status

Example CLI usage:
- ./cli/run_scenario --name=freight_routing_example --payload=examples/freight_payload.json

## Full documentation
More detailed design notes, developer guides, and examples live in the docs/ folder. See docs/ and ARCHITECTURE.md for design and extension details.

## License
This repository is provided under the MIT License. See LICENSE for details.

## Maintainers & contact
- Project: GoKleva (JHUB-AFRICA MP-30)
- Maintainers: JHUB-AFRICA MP-30 team
- Issues & feature requests: open a GitHub issue
- For private support or contributor onboarding: contact the project lead listed in repository settings
