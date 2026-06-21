---
name: revenue-metrics
description: Pull revenue and business metrics across Stripe accounts. Use when checking daily/weekly/monthly revenue, running nightly reviews, comparing periods, or answering sales performance questions.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Business
  display-name: Revenue Metrics
  emoji: "💰"
  version: "1.0"
allowed-tools: run_command read_file create_or_rewrite_file send_sms
---

# Revenue Metrics

Track consolidated revenue across your Stripe accounts.

## Setup

1. Store your Stripe key in Settings > Advanced (or at `/home/workspace/.config/stripe/api_key`)
2. Edit the `ACCOUNTS` dict in `scripts/stripe-metrics.py` with your Stripe account IDs
3. Run metrics:

```bash
python3 /home/workspace/Skills/revenue-metrics/scripts/stripe-metrics.py --period today    # today vs yesterday
python3 /home/workspace/Skills/revenue-metrics/scripts/stripe-metrics.py --period week     # last 7d vs prior 7d
python3 /home/workspace/Skills/revenue-metrics/scripts/stripe-metrics.py --period month    # last 30d vs prior 30d
python3 /home/workspace/Skills/revenue-metrics/scripts/stripe-metrics.py --period all      # all time
```

Output is JSON: gross revenue, refunds, net revenue, transaction count, and period-over-period growth %.

## Nightly Deep Dive Workflow

1. Run `--period today` for the daily snapshot (⚠️ use `--period yesterday` if running at 3 AM)
2. Run `--period month` for trend context
3. Update your daily review doc with final revenue numbers
4. Write findings to `/home/workspace/barbie/memory/YYYY-MM-DD.md` under "## Revenue Review"
5. Propose next day's plan based on what's working
6. Send the user a brief summary via SMS

## Key Metrics to Track

- **Daily net revenue** — the scoreboard
- **Per-account breakdown** — which products are pulling weight
- **Period growth %** — accelerating or decelerating
- **Transaction count** — volume vs ticket size trends

## Customization

Edit `scripts/stripe-metrics.py` to add your Stripe accounts:

```python
ACCOUNTS = {
    "my_product": "acct_XXXX",
    "my_saas": "acct_YYYY",
}
```

The script reads your Stripe key from `/home/workspace/.config/stripe/api_key`.
