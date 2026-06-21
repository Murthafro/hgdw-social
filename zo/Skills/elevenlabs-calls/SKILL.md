---
name: elevenlabs-calls
description: Make AI phone calls using ElevenLabs Conversational AI and Twilio. Use when asked to make a phone call, call someone, or set up an AI voice call.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Communication
  display-name: ElevenLabs Phone Calls
  emoji: "📞"
  version: "1.0"
allowed-tools: run_command read_file
---

# ElevenLabs Phone Calls

Make outbound AI phone calls using ElevenLabs Conversational AI agents via Twilio.

## Prerequisites

1. **ElevenLabs API Key** — store in Settings > Advanced, or at `/home/workspace/.config/elevenlabs/api_key`
2. **ElevenLabs Agent** — create at https://elevenlabs.io/app/agents
3. **Twilio Phone Number** — import into ElevenLabs at https://elevenlabs.io/app/agents/phone-numbers

## Quick Start

```bash
# List your agents
/home/workspace/Skills/elevenlabs-calls/scripts/agents.sh

# List your phone numbers
/home/workspace/Skills/elevenlabs-calls/scripts/phones.sh

# Make a call
/home/workspace/Skills/elevenlabs-calls/scripts/call.sh --agent <agent_id> --phone <phone_number_id> --to "+15551234567"

# Check conversation transcript
/home/workspace/Skills/elevenlabs-calls/scripts/conversation.sh <conversation_id>
```

## Commands

### Make Outbound Call
```bash
/home/workspace/Skills/elevenlabs-calls/scripts/call.sh \
  --agent <agent_id> \
  --phone <phone_number_id> \
  --to "+15551234567" \
  [--vars '{"name":"John","appointment":"Monday 9am"}']
```

### List Recent Conversations
```bash
/home/workspace/Skills/elevenlabs-calls/scripts/conversations.sh [--agent <agent_id>] [--limit 10]
```

### Get Conversation Details
```bash
/home/workspace/Skills/elevenlabs-calls/scripts/conversation.sh <conversation_id>
/home/workspace/Skills/elevenlabs-calls/scripts/conversation.sh <conversation_id> --transcript
/home/workspace/Skills/elevenlabs-calls/scripts/conversation.sh <conversation_id> --audio > call.mp3
```

## Dynamic Variables

Pass context to your agent:
```bash
/home/workspace/Skills/elevenlabs-calls/scripts/call.sh \
  --agent abc123 --phone phone_xyz --to "+15121234567" \
  --vars '{"customer_name":"Jane","reason":"appointment follow-up"}'
```

Reference in your agent's system prompt as `{{customer_name}}`, `{{reason}}`, etc.

## Costs
- ElevenLabs: ~$0.07-0.15/min depending on plan
- Twilio: ~$0.014/min + phone number (~$1/mo)
