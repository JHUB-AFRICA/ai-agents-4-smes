# Troubleshooting

## Navigation
- **Previous:** [Testing](TESTING.md)
- **Next:** none
- **Related:** [Error Handling](ERROR_HANDLING.md), [Environment](ENVIRONMENT.md)

| Symptom | Likely Cause | Fix |
|---|---|---|
| Agent doesn't reply at all | Webhook not active / workflow deactivated | Check the workflow is turned on in n8n/Make |
| Agent replies but gets product info wrong | Catalog data out of date | Refresh the catalog Sheet/Airtable source |
| Payment not detected | Daraja callback URL misconfigured or in sandbox mode | Confirm callback URL + live credentials in [Environment](ENVIRONMENT.md) |
| Duplicate replies sent | Webhook receiving duplicate events | Check for retry/webhook loop in the trigger node |
| AI gives an odd/wrong answer | Prompt drift or model quota hit | Check [API Reference](API_REFERENCE.md) for key status; review system prompt |

*(Add every real incident here as it happens — this table is the single most useful thing you'll leave behind.)*
