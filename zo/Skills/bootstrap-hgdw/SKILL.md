---
name: bootstrap-hgdw
description: Install or update the HGDW Content Chief into Zo Computer. Sets up persona, rules, bio, automations, all 22 skills, intelligence layer, and content engine. Idempotent — safe to run multiple times. Use when asked to install the content engine, set up HGDW, bootstrap the system, or initialize the workspace.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Setup
  display-name: Bootstrap HGDW Content Chief
  emoji: "🔥"
  version: "1.0"
allowed-tools: run_command read_file create_or_rewrite_file list_personas create_persona edit_persona list_rules create_rule edit_rule update_user_settings list_automations create_automation edit_automation
---

# Bootstrap HGDW Content Chief

Install the HGDW Content Chief AI agent system into this Zo Computer. This is the marketing & content intelligence brain for HOT GIRLS DONT WORK — separate from your main Chief of Staff.

This skill is idempotent — re-running it updates existing configuration without duplicating.

## Step 1: Clone or update the repo

```bash
cd /home/workspace
if [ -d "hgdw-social" ]; then
  cd hgdw-social && git pull
else
  git clone https://github.com/Murthafro/hgdw-social.git hgdw-social
fi
```

## Step 2: Install persona

1. Read `/home/workspace/hgdw-social/zo/install/persona.md`
2. Run `tool list_personas` to check if "HGDW Content Chief" persona exists
3. If exists: `tool edit_persona` to update the prompt
4. If not: `tool create_persona` with:
   - Name: "HGDW Content Chief"
   - Prompt: the full persona prompt from persona.md
   - No model override (uses user's default)

## Step 3: Install rules

1. Read `/home/workspace/hgdw-social/zo/install/rules.md`
2. Parse each rule (always-on and conditional)
3. Run `tool list_rules` to check existing rules
4. For each rule:
   - If exists (match by slug): `tool edit_rule` to update
   - If not: `tool create_rule` with the appropriate condition and prompt

## Step 4: Update bio

1. Read `/home/workspace/hgdw-social/zo/install/bio.md`
2. Run `tool update_user_settings` with the bio content
3. Substitute any placeholder values — ask the user if needed

## Step 5: Install automations

1. Read `/home/workspace/hgdw-social/zo/install/agents.md`
2. Parse each agent definition (name, rrule, delivery, instruction)
3. Run `tool list_automations` to check existing automations
4. For each automation:
   - If exists (match by name): `tool edit_automation` to update
   - If not: `tool create_automation` with the RRULE, instruction, delivery, and model

## Step 6: Copy skills

```bash
cp -r /home/workspace/hgdw-social/zo/Skills/* /home/workspace/Skills/ 2>/dev/null || true
```

## Step 7: Copy context files

```bash
mkdir -p /home/workspace/hgdw-social/context
# Context files already live in the repo at /home/workspace/hgdw-social/context/
# Skills reference them there directly
```

## Step 8: Scaffold content engine directories

```bash
mkdir -p /home/workspace/HGDW/Research/daily
mkdir -p /home/workspace/HGDW/Research/trends
mkdir -p /home/workspace/HGDW/Content/emails
mkdir -p /home/workspace/HGDW/Content/blog
mkdir -p /home/workspace/HGDW/Content/social
mkdir -p /home/workspace/HGDW/Intelligence
mkdir -p /home/workspace/HGDW/config
```

## Step 9: Initialize intelligence files

Create these files if they don't already exist:

```bash
[ -f "/home/workspace/HGDW/Intelligence/trend-index.md" ] || cat > /home/workspace/HGDW/Intelligence/trend-index.md << 'EOF'
# HGDW Trend Index
> Auto-updated by the trend synthesizer. Tracks recurring themes across days and weeks.
> Format: topic | first seen | times seen | last seen | trajectory (rising/stable/fading)

---
EOF

[ -f "/home/workspace/HGDW/Intelligence/calibration-log.md" ] || cat > /home/workspace/HGDW/Intelligence/calibration-log.md << 'EOF'
# HGDW Calibration Log
> Updated every Sunday by the weekly calibration skill.
> Tracks what worked, what didn't, and how the engine should adjust.

---
EOF

[ -f "/home/workspace/HGDW/Intelligence/content-performance.md" ] || cat > /home/workspace/HGDW/Intelligence/content-performance.md << 'EOF'
# HGDW Content Performance Tracker
> Log content performance here after publishing. The calibration skill reads this.
> Format: date | type (email/blog/social) | title/hook | platform | result (opens/clicks/saves/shares) | notes

---
EOF

[ -f "/home/workspace/HGDW/Research/weekly-tracker.md" ] || cat > /home/workspace/HGDW/Research/weekly-tracker.md << 'EOF'
# HGDW Weekly Research Tracker
> Updated daily by the research sweep. Read by the weekly email, blog, and social skills.

---
EOF

[ -f "/home/workspace/HGDW/config/blog-api.md" ] || cat > /home/workspace/HGDW/config/blog-api.md << 'EOF'
# HGDW Blog API Config
POST [YOUR_CMS_API_ENDPOINT_HERE]
Bearer token: [YOUR_API_TOKEN_HERE]
Always post as draft unless explicitly asked to publish.
EOF
```

## Step 10: Scaffold memory directories (ported from Barbie)

```bash
mkdir -p /home/workspace/barbie/life/{projects,areas/{people,companies},resources,archives}
mkdir -p /home/workspace/barbie/memory
mkdir -p /home/workspace/barbie/state
mkdir -p /home/workspace/barbie/context

# Copy context files for Barbie-ported skills
cp -r /home/workspace/hgdw-social/context/* /home/workspace/barbie/context/ 2>/dev/null || true
```

Create the daily note if it doesn't exist:
```bash
TODAY=$(date +%Y-%m-%d)
[ -f "/home/workspace/barbie/memory/$TODAY.md" ] || echo "# $TODAY" > "/home/workspace/barbie/memory/$TODAY.md"
```

## Step 11: Verify integrations

Check and report which integrations are connected:

| Integration | Required? | How to Connect |
|-------------|-----------|----------------|
| Stripe | Yes (for revenue tracking) | Settings > Integrations > Stripe |
| Gmail | Optional | Settings > Integrations > Gmail |
| Google Calendar | Optional | Settings > Integrations > Google Calendar |
| Google Drive | Optional | Settings > Integrations > Google Drive |
| X (Twitter) | Optional | Settings > Integrations > X |

Report status to the user and suggest connecting any missing integrations.

## Step 12: Set active persona

Run `tool set_active_persona` to set "HGDW Content Chief" as the active persona for the current channel.

## Step 13: Confirm

Send the user a message confirming installation:

```
HGDW Content Chief online.

Installed:
- Persona: HGDW Content Chief (marketing & content intelligence)
- Rules: [count] rules active
- Automations: [count] (daily research, trend synthesis, blog, email, social, repurpose, calibration)
- Skills: [count] total
  - Content engine: 8 (research, trends, email, blog, social, repurpose, copy-edit, calibrate)
  - Ported from Barbie: 14 (revenue, daily-review, site-health, research, x-posting, coding-agents, elevenlabs, talking-head, blog-images, instagram-slides, email-fortress, content-machine, daily-instagram-script, content-dashboard)
- Intelligence layer: trend index, calibration log, performance tracker
- Context files: brand voice, audience profile, manifesto, watchlist, hook library, copywriting playbook

Action needed:
- Fill in /home/workspace/HGDW/config/blog-api.md with CMS credentials
- Connect Stripe in Settings > Integrations

Ready to run today's research or draft content. What do you need?
```
