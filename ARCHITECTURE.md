# GoKleva — Architecture

This document describes GoKleva's high-level architecture, components, and recommended deployment patterns. It is intended for developers and operators who need to extend or run the system.

## High-level overview
GoKleva is built as a small set of cooperating layers:

- Agents: encapsulated units of task logic (NLP, decision-making, extraction).
- Orchestrator: coordinates agent execution, manages state and retries.
- Connectors: adapters for external systems (APIs, databases, messaging).
- API layer & CLI: user-facing interfaces for invoking scenarios and monitoring runs.
- Storage & Observability: persistence for state/audit and metrics/tracing for monitoring.

Below is a simple diagram showing common data flow (Mermaid):

```mermaid
flowchart LR
  subgraph External
    Client[Client (API / CLI)]
    Systems[External Systems (Carriers, Booking APIs, DBs)]
  end

  Client --> API[REST API / CLI]
  API --> Orchestrator[Orchestrator]
  Orchestrator --> Agent1[Agent: Input Parser]
  Orchestrator --> Agent2[Agent: Planner / Router]
  Orchestrator --> Agent3[Agent: Executor]
  Agent2 --> Connectors[Connectors]
  Agent3 --> Connectors
  Connectors --> Systems
  Orchestrator --> Store[(State / Audit DB)]
  Orchestrator --> Metrics[Prometheus / Tracing]
```

## Components & responsibilities

- Agents
  - Purpose: perform a single, testable unit of work (parse input, enrich data, choose route, schedule booking).
  - Implementation: language-agnostic modules. Each agent implements a simple interface (input -> output + status).
  - Best practices: keep agents idempotent, avoid blocking I/O, and include retries for external calls.

- Orchestrator
  - Purpose: orchestrates agent execution according to scenario definitions, handles state, retries, timeouts, and error handling.
  - Responsibilities: run DAGs or step sequences, persist run state, emit events/metrics, and provide hooks for compensating actions.

- Connectors
  - Purpose: abstract external system details behind a uniform adapter interface.
  - Examples: carrier APIs, booking systems, SMS/email gateways, databases.
  - Best practices: keep connectors thin, secure credentials via env/secret manager, and provide sandbox/mock implementations for testing.

- API & CLI
  - REST API: exposes endpoints to start scenarios, query run status, and fetch logs/results.
  - CLI: convenience tooling for developers and operators to run scenarios and inspect state.

- Storage & Observability
  - State & Audit: small relational DB (SQLite for dev, Postgres for prod) to store run metadata, inputs, and results.
  - Metrics: Prometheus metrics endpoint and structured JSON logs for ingestion by log aggregators.
  - Tracing: optional OpenTelemetry integration for tracing agent flows and external calls.

## Data flow and run lifecycle
1. Client submits a scenario (API or CLI) with a payload.
2. Orchestrator validates and creates a run record in the DB.
3. Orchestrator schedules agent steps according to the scenario definition.
4. Each agent executes, may call connectors, and returns output to the orchestrator.
5. Orchestrator persists intermediate state, emits metrics, and proceeds to next steps.
6. On completion, orchestrator writes final results and emits a completion event.

## Extensibility points
- Add new agents by implementing the Agent interface and registering them in the orchestrator configuration or discovery mechanism.
- Add connectors under `/connectors/<name>` with a README and config template.
- Scenario definitions live under `/scenarios` (or orchestrator config) and describe step sequences and timeouts.

## Deployment patterns
- Development: Docker Compose running services locally (orchestrator, api, a mock Postgres/SQLite, and mock connectors).
- Small production pilot: containerized services with a managed Postgres and a reverse proxy (Traefik / Nginx).
- Production-scale: Kubernetes deployment with Horizontal Pod Autoscaling for the orchestrator and stateless API; Postgres managed service; Prometheus & Grafana for monitoring.

## Operational notes
- Secrets: use environment variables or a secrets manager (Vault, cloud secret stores) — never store secrets in git.
- Backups: regular DB backups for Postgres; store artifacts in object storage where needed.
- Scaling: keep agents stateless where possible; orchestrator must persist run state to allow scaling horizontally.

## Recommended technologies
- Containers: Docker, Docker Compose (dev); Kubernetes (prod)
- Database: Postgres (production), SQLite (dev)
- Observability: Prometheus, Grafana, OpenTelemetry
- Message bus (optional): RabbitMQ / Redis Streams for high-throughput scenarios

## Further reading
- See docs/ for implementation guides, agent interface docs, connector templates, and runbooks.
