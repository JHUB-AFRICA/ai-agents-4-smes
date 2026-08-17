# Copilot / Coding Agent instructions for JHUB-AFRICA/ai-agents-4-smes (GoKleva)

Summary
- Project: GoKleva — AI automation agents for Transport (pilot) and cross-industry use.
- Purpose: Provide concise guidance to coding agents about repository goals, important workflows, and safe change practices.

What this repo is
- Single-repo app that includes: orchestrator/API, agents, connectors, frontend (Vite/React), and docs.
- Key directories:
  - /src or /server — API and orchestrator code
  - /agents — agent implementations
  - /connectors — external adapter implementations
  - /scenarios — scenario definitions
  - /docs — documentation and runbooks

Primary goals for coding agents
- Make small, well-tested changes that preserve system behavior.
- Prefer changes that:
  - Implement or update API routes, agent interfaces, or connector templates.
  - Add or improve docs (API reference, quickstart, runbooks).
  - Add or update tests (unit/integration) and CI workflow.
  - Generate or update OpenAPI spec for the API layer.

How to run & test locally (high level)
- Node-based frontend: `cd frontend && npm install && npm run dev`
- Server/API: `cd server && npm install && npm run dev` (or `npm run start`)
- Dev DB: use SQLite by default; see docs/docker-compose.yml for a local setup.
- Tests: `npm test` or `pnpm test` (check repo package.json).

Code change rules
- Run tests and linters locally before committing. Add tests for new behavior.
- Keep changes small and self-contained.
- Prefer clear commit messages: "<area>: short description" (e.g., "api: add /runs/{id}/logs endpoint").
- When modifying interfaces (agent inputs/outputs) update docs and add migration/adapters where needed.

APIs & OpenAPI
- If adding or changing endpoints, update or generate the OpenAPI spec and docs/docs/api.md.
- Preferred: produce an OpenAPI v3 JSON or YAML and place it at /docs/openapi.json (or expose at /api/openapi.json).

Security & secrets
- Never commit secrets or credentials. Use environment variables or secret manager patterns.
- If adding examples, redact or use placeholders like <API_KEY>.

Branching and PRs
- Target branch: create a feature branch from the repository default branch (do not push directly to default).
- PR title: concise summary; PR description: what changed, why, and how to test.
- Include changelog entry only for user-facing changes.

If you are unsure
- Ask a human reviewer via PR comment for design or security decisions.
- For breaking changes to agent or API interfaces, include a migration plan and tests.

Contact / context
- This repo is part of the MP-30 "AI Agents for SMEs" initiative at JHUB Africa. Prioritize clarity for internal developers and external SME users.
