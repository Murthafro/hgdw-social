---
name: instagram-slides
description: Turn blog posts into Instagram carousel slideshows with brand-consistent styling. Generates background images via AI and composites text overlays. Use when asked to create Instagram carousels, slideshows, social media graphics, or carousel posts.
compatibility: Created for Zo Computer
metadata:
  author: HGDW
  category: Content
  display-name: Instagram Slides
  emoji: "📱"
  version: "1.0"
allowed-tools: run_command read_file create_or_rewrite_file read_webpage generate_image
---

# Instagram Slides

Turn blog posts or content into Instagram carousel slideshows.

## Pipeline
1. **Extract** — fetch blog post content via `tool read_webpage`
2. **Plan** — write a `plan.json` with slide content and image prompts
3. **Generate Backgrounds** — AI image generation via Fal API or Zo's built-in `tool generate_image`
4. **Text Overlay** — Pillow composites text onto backgrounds with brand styling
5. **Output** — numbered slide images + `caption.txt`

## Usage

```bash
# Full pipeline
python3 /home/workspace/Skills/instagram-slides/scripts/generate.py \
  --url "https://blog.example.com/post" \
  --slides 8 \
  --output /home/workspace/slides

# Plan only (review before generating)
python3 /home/workspace/Skills/instagram-slides/scripts/generate.py \
  --url "https://blog.example.com/post" \
  --slides 8 \
  --plan-only \
  --output /home/workspace/slides

# Generate from existing plan
python3 /home/workspace/Skills/instagram-slides/scripts/generate.py \
  --plan-file /home/workspace/slides/plan.json \
  --output /home/workspace/slides
```

## Plan JSON Schema

```json
{
  "angle": "how-to | listicle | hot-take | story-arc | myth-busting",
  "style_prefix": "Shared image generation prompt prefix (~30 words)",
  "slides": [
    {
      "headline": "Short headline (≤8 words)",
      "body": "Supporting text (≤20 words)",
      "bg_prompt": "Background image description (NO text in image)",
      "is_title": true,
      "is_cta": false
    }
  ],
  "caption": "Full Instagram caption with hook, value, CTA, hashtags"
}
```

## Image Style Tips

**Good:**
- Bright, warm, natural lighting
- Clean, airy, modern aesthetic
- Contextual imagery illustrating each slide's topic
- Editorial photography feel

**Avoid:**
- Baked-in text/words in generated images
- Dark, moody backgrounds (unless that's your brand)
- Abstract meaningless gradients

## Dependencies
- Python 3 with `Pillow`, `requests`
- Fal API key at `/home/workspace/.config/fal/api_key` (or use Zo's built-in image generation)
- Brand fonts in `/home/workspace/Skills/instagram-slides/fonts/`

## Costs
- ~$0.15/image via Fal
- ~$1.20 for 8 slides

## Tips
- First slide = strong hook/title card
- Last slide = CTA with link
- Keep text SHORT — Instagram is visual-first
- Raw backgrounds saved as `raw_NN.png` — re-composite without regenerating images
