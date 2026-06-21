---
name: talking-head
description: Generate talking-head avatar videos from a script. Handles ElevenLabs TTS audio generation and video synthesis via Fal API. Use when asked to create a talking head video, avatar video, or lip-synced video.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Content
  display-name: Talking Head Video
  emoji: "🎬"
  version: "1.0"
allowed-tools: run_command read_file create_or_rewrite_file
---

# Talking Head Video Generator

Create lip-synced avatar videos from text scripts.

## Pipeline
1. **Write script** — the words your avatar will speak
2. **Generate audio** — ElevenLabs TTS with your chosen voice
3. **Generate video** — VEED Fabric 1.0 via Fal API (720p)

## Usage

```bash
python3 /home/workspace/Skills/talking-head/scripts/generate.py \
  --script "Your script text here" \
  --voice <elevenlabs_voice_id> \
  --avatar <image_url_or_path> \
  --output /home/workspace/video.mp4
```

## Avatar Requirements
- Clear, front-facing headshot
- Good lighting, neutral expression
- JPG or PNG, at least 512x512

## Voice Options

Find voice IDs at https://elevenlabs.io/app/voice-library or use:
```bash
curl -s "https://api.elevenlabs.io/v1/voices" \
  -H "xi-api-key: $(cat /home/workspace/.config/elevenlabs/api_key)" | python3 -m json.tool
```

## API Keys

- **ElevenLabs**: store in Settings > Advanced, or at `/home/workspace/.config/elevenlabs/api_key`
- **Fal**: store in Settings > Advanced, or at `/home/workspace/.config/fal/api_key` (env var `FAL_KEY`)

## Costs
- ElevenLabs TTS: ~$0.15-0.30 per minute of audio
- Fal Fabric 1.0: ~$0.10-0.20 per video generation
- Total: ~$0.30-0.50 per short video (~30s-1min)

## Tips
- Keep scripts under 60 seconds for best quality
- Use a consistent avatar image for brand recognition
- Test with a short phrase before generating full videos
