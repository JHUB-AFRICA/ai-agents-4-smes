# Testing

## Navigation
- **Previous:** [Tech Debt](TECH_DEBT.md)
- **Next:** [Troubleshooting](TROUBLESHOOTING.md)
- **Related:** [Performance](PERFORMANCE.md)

Tested by: [Name] · Date: [Date] · Environment: [see Environment.md — sandbox or production]

## Test Cases
| Test Case | Input / Scenario | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|
| Catalog lookup — item in stock | "Do you have the black hoodie in size L?" | Agent replies with price and availability | | |
| Catalog lookup — out of stock | Ask for an out-of-stock item | Agent says unavailable, offers alternative | | |
| Order confirmation | Confirm an item after lookup | Agent summarizes order + payment instructions | | |
| Payment confirmation | Send M-Pesa payment | Agent detects payment and confirms | | |
| Delivery update | Order status changes | Customer receives update message | | |
| Unrecognized message | Random/off-topic message | Agent responds gracefully — see [Routing](ROUTING.md) fallback | | |
| After-hours message | Message sent outside business hours | Agent still responds | | |

## Regression Checklist (before every deploy)
- [ ] Catalog data is current
- [ ] Webhook URL correctly points to production workflow
- [ ] M-Pesa credentials are live, not sandbox
- [ ] AI model API key has not expired/hit quota
