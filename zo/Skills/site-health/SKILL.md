---
name: site-health
description: Check production site availability. Use during heartbeats, when asked about site status, uptime, or whether the website is working.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Monitoring
  display-name: Site Health
  emoji: "🏥"
  version: "1.0"
allowed-tools: run_command
---

# Site Health Check

Quick HTTP health checks for your production sites.

## Usage

```bash
/home/workspace/Skills/site-health/scripts/check.sh
```

## Setup

Edit `/home/workspace/Skills/site-health/scripts/check.sh` to add your sites:

```bash
SITES=(
  "https://yoursite.com|Your Site|expected text"
  "https://app.yoursite.com|Your App|expected text"
)
```

Each entry: `URL|Display Name|Text to expect in response` (optional text check).

## How It Works

1. Sends a GET request to each URL
2. Checks for HTTP 200 (follows redirects)
3. Optionally verifies response contains expected text
4. Reports pass/fail for each site
5. Returns non-zero exit code if any site is down

## Integration with Automations

This skill is called by the hourly heartbeat automation. If ANY site returns a non-200 status, alert Courtney immediately via SMS.
