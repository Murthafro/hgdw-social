---
name: x-posting
description: Post tweets, read mentions, reply, like, retweet, and search on X/Twitter. Use when asked to tweet, post on X, check mentions, engage on Twitter, or schedule social media posts.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Social Media
  display-name: X/Twitter Posting
  emoji: "🐦"
  version: "1.0"
allowed-tools: run_command read_file
---

# X/Twitter — Posting & Engagement

All X/Twitter interactions use Zo's built-in X integration or the `xpost` CLI.

## Setup

### Option A: Zo Built-in Integration
Connect your X account in Settings > Integrations > X (Twitter). This gives Zo native `tool use_x` access.

### Option B: xpost CLI
1. Install: `npm install -g xpost-cli`
2. Store your X API keys at `/home/workspace/.config/x-api/keys.env`:

```
X_API_KEY=...
X_API_SECRET=...
X_ACCESS_TOKEN=...
X_ACCESS_TOKEN_SECRET=...
X_USER_ID=...
```

Get these from https://developer.x.com/en/portal/dashboard (Basic tier: $200/mo).

## Commands (xpost CLI)

```bash
# Post a tweet
xpost post "Your tweet text here"

# Reply to a tweet
xpost reply <tweet_id> "Your reply text"

# Quote tweet
xpost quote <tweet_id> "Your quote text"

# Get mentions
xpost mentions [--count 20]

# Search recent tweets
xpost search "query string" [--count 10]

# Like a tweet
xpost like <tweet_id>

# Retweet
xpost retweet <tweet_id>

# Delete a tweet
xpost delete <tweet_id>

# Get a single tweet
xpost get <tweet_id>

# Home timeline
xpost home [--count 20]
```

## Using Zo's Built-in X Tool

If connected via Settings > Integrations, use `tool use_x` for all operations. This is simpler and doesn't require separate API keys.

## Rate Limits (Basic Tier)
- POST tweets: 100/15min, 10,000/24hrs
- GET mentions: 300/15min
- GET timeline: 900/15min
- Search recent: 300/15min
- Likes: 50/15min, 1,000/24hrs

## Scheduling Tweets via Zo Automations

Use Zo's `tool create_automation` to schedule tweets:

```
RRULE: FREQ=DAILY;BYHOUR=14;BYMINUTE=0
Instruction: "Post this tweet: [content]. Use the X integration."
Delivery: none
```

## Tips
- For engagement: reply to mentions promptly, quote-tweet interesting content with your take
- Keep tweets concise and aligned with HGDW brand voice
