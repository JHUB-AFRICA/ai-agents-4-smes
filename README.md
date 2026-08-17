# GoKleva

GoKleva is an AI automation agents project built for the MP-30 "AI Agents for SMEs" initiative at JHUB Africa. Its primary industry target is Transport with Healthcare and other sectors provided as cross-industry scalability case studies.

- Audience: internal developers (run/extend the code) and external users/clients (understand/use the system).
- Goal: ship composable AI agents that automate SME workflows and can be adapted across industries.

## Quick links
- Code: repository root
- Issues: /issues
- Contribution guide: CONTRIBUTING.md (see Contributing section)

## Key features
- Modular AI agents for task automation (NLP, data extraction, scheduling, routing)
- Extensible plugin model for adding domain-specific connectors
- Lightweight orchestration suited for SME deployments (local or cloud)
- Example scenarios: Freight routing (Transport), Appointment triage (Healthcare)

## Architecture overview
- Agents: independent components that perform tasks (extract, decide, act).
- Orchestrator: coordinates agents and routes inputs/outputs.
- Connectors: adapters to external systems (databases, messaging, transport APIs).
- Storage: lightweight persistence for state and audit logs (configurable: SQLite/Postgres).
- Interfaces: REST API + CLI for integrations and manual control.

## Components (high level)
- /agents — agent implementations and templates
- /orchestrator — flow logic and agent coordination
- /connectors — external system adapters
- /api — REST endpoints and request/response models
- /cli — developer/ops command-line tooling
- /docs — additional documentation and design notes
- /scripts — helper scripts for setup and deployments
- /tests — unit/integration tests and scenario runners

## Installation (developer)
1. Clone the repo:
   - git clone https://github.com/JHUB-AFRICA/ai-agents-4-smes.git
   - cd ai-agents-4-smes
2. Recommended: use Docker for reproducible environment:
   - docker compose up --build
3. Or run locally (example with Go/Node/Python components):
   - Create virtualenv (if Python parts exist): python -m venv .venv && source .venv/bin/activate
   - Install deps: (see language-specific README sections)
4. Configuration:
   - Copy example config: cp .env.example .env
   - Fill API keys and connector URLs in .env or config.yaml

## Quickstart (local dev)
- Start services:
  - docker compose up -d
- Run a sample agent scenario:
  - ./cli/run_scenario --name=freight_routing_example
- Call the API:
  - curl -X POST http://localhost:8000/v1/agents/run -d '{"scenario":"freight_routing","input":{...}}'

## Usage and examples
- REST API:
  - POST /v1/agents/run — start an agent flow
  - GET /v1/agents/{id}/status — check status
- CLI:
  - ./cli/list_agents
  - ./cli/trigger_agent --agent=dispatcher --input-file=payload.json
- Example payloads are in /examples

## Configuration
- .env or config.yaml keys:
  - HOST, PORT — HTTP server
  - DB_URL — database connection string
  - AGENT_TIMEOUT — default timeouts for agent runs
  - LOG_LEVEL — debug/info/warn
- Connector-specific settings live under connectors/<connector-name>/README.md

## Extending and adding agents
- Create a new agent module in /agents:
  - Implement the Agent interface (see /agents/README.md)
  - Add unit tests in /tests/agents
  - Register the agent in orchestrator config (or dynamic discovery)
- Best practices:
  - Keep agents single-responsibility
  - Avoid long-running blocking work inside agents; delegate where possible
  - Include idempotency and clear error handling

## Development workflow
- Branching: feature/*, fix/*, chore/*
- Pull requests:
  - Include tests and a short demo in /examples
  - CI runs linting and tests on PRs
- Local testing:
  - pytest (or language-appropriate test runner)
  - Run scenario-based integration tests with: ./scripts/run_integration_tests.sh

## Testing
- Unit tests: run the language toolchain tests in each module
- Integration tests: docker compose up and ./scripts/run_integration_tests.sh
- Scenario tests: /tests/scenarios contains example runs for Transport and Healthcare

## Security & Data privacy
- Secrets: store in environment variables or a secrets manager; do NOT commit to git
- Data handling: anonymize or pseudonymize production data used in testing
- Authentication: JWT/API key support on the API; enforce HTTPS in production

## Observability & Logging
- Structured JSON logs by default
- Metrics: expose Prometheus metrics at /metrics
- Tracing: optional OpenTelemetry hooks in the orchestrator (see /docs/tracing.md)

## Deployment
- Small-scale: docker compose with a managed DB (Postgres)
- Production: Kubernetes manifests in /deploy (Helm charts are a recommended next step)
- Rolling updates: orchestrator supports graceful shutdown and state checkpointing

## Contributing
- Please read CONTRIBUTING.md for details on coding standards, tests, and PR process
- How to propose changes:
  - Open an issue with the problem statement and a suggested approach
  - Create a feature branch and open a PR linking the issue
- Code style and linting are enforced by CI

## Roadmap (short)
- v0.1: core orchestrator + Transport baseline agents (routing, booking)
- v0.2: connectors for major carriers and scheduling systems
- v0.3: Healthcare case study agents + enhanced privacy controls
- Community contributions: templates for industry-specific agent packs

## FAQ
- Q: Is GoKleva production-ready?
  - A: The core is designed for pilot and SME deployments. Review configuration and connectors before production use.
- Q: How do I add a new connector?
  - A: Create a connector under /connectors, implement the adapter interface, add config entries, and test with an example scenario.

## Contacts & support
- Maintainers: JHUB-AFRICA MP-30 team
- For issues and feature requests: open a GitHub issue
- For private support: contact the project lead (see repository settings)

## Appendix / Helpful files
- /docs — design docs and detailed developer guides
- /examples — runnable example scenarios
- /scripts — deployment and utility scripts
- /tests — automated tests and scenario validators
