---
name: research
description: Research topics using web search and X/Twitter search. Use for finding media appearances, news, people, companies, competitors, or any task requiring real-time web data.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Research
  display-name: Web & Social Research
  emoji: "🔍"
  version: "1.0"
allowed-tools: search_the_web research_the_web search_x read_webpage run_command
---

# Research — Web + X/Twitter Search

## How It Works

Zo has built-in tools for research:

| Tool | Purpose |
|------|---------|
| `tool search_the_web` | Quick web search |
| `tool research_the_web` | Deep web research (more powerful) |
| `tool search_x` | Search X/Twitter posts and users |
| `tool read_webpage` | Read full webpage content |

## Using Zo's Built-in Tools (Preferred)

Simply ask Zo to research something — it will use its native web search, deep research, and X search tools automatically. No API keys needed.

## Alternative: Grok API (for advanced X/Twitter research)

If you need Grok's specific capabilities, store your xAI API key at `/home/workspace/.config/xai/api_key`:

```bash
XAI_KEY=$(cat /home/workspace/.config/xai/api_key)

curl -s https://api.x.ai/v1/responses \
  -H "Authorization: Bearer $XAI_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4-1-fast",
    "input": "YOUR RESEARCH QUERY HERE",
    "tools": [{"type": "web_search"}, {"type": "x_search"}]
  }' | python3 -c "
import sys, json
data = json.load(sys.stdin)
for item in data.get('output', []):
    if item.get('type') == 'message':
        for c in item.get('content', []):
            if c.get('type') == 'output_text':
                print(c['text'])
            for ann in c.get('annotations', []):
                if ann.get('url'):
                    print(f'  [{ann[\"url\"]}]')
"
```

## When to Use

- Finding media appearances, podcast episodes, interviews
- Researching people, companies, events
- Checking recent news or social media discussion
- X/Twitter sentiment or discussion analysis
- Competitor research
- Trend monitoring

## When NOT to Use

- Simple factual questions (use regular chat)
- Code generation or analysis
- Tasks that don't need web data
