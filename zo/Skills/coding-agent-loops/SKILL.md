---
name: coding-agent-loops
description: Run long-lived AI coding agents (Codex, Claude Code, Gemini CLI) in persistent sessions with retry loops and completion hooks. Use when running multi-step coding tasks, PRD-based workflows, or any programming agent that needs to survive restarts and retry on failure.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Development
  display-name: Coding Agent Loops
  emoji: "🔄"
  version: "1.0"
allowed-tools: run_command read_file create_or_rewrite_file
---

# Coding Agent Loops

Run AI coding agents in persistent, self-healing sessions with automatic retry and completion notification.

## Core Concept

Instead of one long agent session that stalls or dies, run many short sessions in a loop. Each iteration starts fresh — no accumulated context. The agent picks up where it left off via files and git history.

## Zo Coding Agent Options

Zo natively supports three headless coding agents:

| Agent | Command | Best For |
|-------|---------|----------|
| **Claude Code** | `claude -p "task"` | Multi-file refactors, architectural work |
| **Codex CLI** | `codex exec "task"` | Fast focused edits, single-file |
| **Gemini CLI** | `gemini-cli -p "task"` | Large codebase understanding (1M token context) |

Set up in Settings > Advanced > AI Providers.

## Quick Start

### Single Task with Claude Code
```bash
cd /path/to/repo && claude -p "Fix the authentication bug in the API"
```

### Single Task with Codex
```bash
cd /path/to/repo && codex exec --full-auto "Fix the authentication bug"
```

### PRD-Based Workflow (if using ralphy)
```bash
cd /path/to/repo && ralphy --codex --prd PRD.md
```

## Zo-Native Orchestration

Zo wraps coding agents with infrastructure they can't provide alone:

- **Git workflow** — branches, worktrees, isolated PRs per task
- **Scheduling** — use automations to trigger coding runs on a schedule
- **Delivery** — results sent via SMS, email, Telegram, Slack, Discord
- **Tool access** — MCP connections the coding agent can use
- **Chaining** — Agent A → verify → Agent B → deploy

### Schedule a Nightly Test Fix Run

```
RRULE: FREQ=DAILY;BYHOUR=2;BYMINUTE=0
Delivery: sms
Instruction: "cd ~/projects/myapp && git checkout main && git pull.
  Run 'claude -p \"Run the test suite, fix any failures, commit fixes\"'.
  If tests pass, push. Send me the summary."
```

## PRD Format

Track completion via markdown checklists:

```markdown
## Tasks
- [ ] Create the API endpoint
- [ ] Add input validation
- [ ] Write tests
- [x] Already done (skipped)
```

## When to Use What

| Scenario | Tool |
|----------|------|
| Multi-file refactor | Claude Code |
| Quick bug fix | Codex CLI |
| Large codebase exploration | Gemini CLI |
| Test suite maintenance | Claude Code |
| Documentation generation | Any |

## Post-Completion Verification

Before declaring success or failure:
1. `git log --oneline -3` — did the agent commit?
2. `git diff --stat` — uncommitted changes?
3. Review the output — what actually happened?

## Troubleshooting

- **"Failed to refresh token"** → run `codex auth login` or `claude login`
- **Agent reads files and exits** → wrap in a retry loop
- **API rate limits (429s)** → reduce parallelism or stagger starts
