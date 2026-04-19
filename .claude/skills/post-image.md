---
name: post-image
description: Generate on-brand Jaypore Labs social post images (Instagram, LinkedIn, X) that match the website's visual system exactly. Use when the user asks for a post, announcement graphic, carousel slide, case-study card, stat callout, or share image. Five templates (quote, stat, announcement, list, case-study) across four sizes (square, portrait, story, landscape).
---

# post-image

When the user asks for a social image in the Jaypore Labs brand, use this skill.

## What this does

Calls `scripts/gen-post.mjs` to render a PNG that uses the same tokens, typography, and motion cues as jayporelabs.com. Fonts ship via `@fontsource` packages installed in devDependencies — no network required after install.

## Before you run

Ask the user — or infer from context — for these three things:

1. **Template** — one of `quote | stat | announcement | list | case-study`
2. **Size / platform** — `square | portrait | story | landscape`
3. **Content** — title, subtitle, stat, items, etc., depending on template

If any are genuinely ambiguous, ask. Otherwise, pick the best fit and note your call.

## Sizes (pixels · platform)

| flag | pixels | platform |
| --- | --- | --- |
| `square` | 1080×1080 | Instagram feed post |
| `portrait` | 1080×1350 | Instagram portrait (4:5) |
| `story` | 1080×1920 | Instagram/Facebook Story, Reels cover |
| `landscape` | 1600×900 | LinkedIn, X, Facebook share card |

## Templates (flags · use case · example)

### `quote`
Flags: `--title` (required, supports `\n` line breaks) · `--subtitle` · `--kicker` (default "Note")
Use for: manifesto lines, positioning statements, big takeaways.
Keep title under ~40 chars per line so it breathes.

```bash
npm run gen:post -- --template quote --size square \
  --title "Your business,\nAI-ready." \
  --subtitle "We build AI-enabled software and help businesses put AI to work." \
  --kicker "Manifesto" \
  --out social/out/hero-square.png
```

### `stat`
Flags: `--stat` (required, short — "100+", "3 hrs") · `--label` · `--subtitle` · `--kicker` (default "Field note")
Use for: social proof, outcomes, metrics, case-study teasers.

```bash
npm run gen:post -- --template stat --size square \
  --stat "3 hrs" --label "saved per doctor, daily." \
  --subtitle "Nudge AI · scribes deployed across psychiatry, pediatrics, family medicine." \
  --kicker "Field note" \
  --out social/out/stat-square.png
```

### `announcement`
Flags: `--title` (required, supports `\n`) · `--subtitle` · `--kicker` (default "Booking")
Use for: availability, launches, hiring, events, office hours. Ships with an accent status-dot chip in the top-right.

```bash
npm run gen:post -- --template announcement --size portrait \
  --title "Booking\nQ2 2026." \
  --subtitle "Two slots open. Scribes, copilots, voice AI — wherever your software meets real workflows." \
  --kicker "Availability" \
  --out social/out/booking-portrait.png
```

### `list`
Flags: `--title` (required, supports `\n`) · `--items "a|b|c|..."` · `--kicker` (default "Playbook")
Use for: how-tos, tips, checklists, principles, carousel slides (render one per slide).
Aim for 3–5 items, 40–60 chars each.

```bash
npm run gen:post -- --template list --size portrait \
  --title "Three ways to\nintroduce AI\nto a clinic." \
  --items "Pick one specialty, not all|Ship to one doctor first|Measure minutes saved, not tokens used" \
  --kicker "Playbook · Healthcare" \
  --out social/out/playbook-portrait.png
```

### `case-study`
Flags: `--client` (required) · `--stat` (required) · `--label` · `--subtitle` · `--kicker` (default "Case study")
Use for: client work showcases, outcome-focused cards.

```bash
npm run gen:post -- --template case-study --size landscape \
  --client "Luxembourg clinic" --stat "100+" \
  --label "doctors using Lucy in production." \
  --subtitle "Led a team of five from zero to clinic OS. Full stack. Shipped in Europe." \
  --kicker "Case study" \
  --out social/out/case-lucy-landscape.png
```

## Optional flags (all templates)

- `--accent "#RRGGBB"` — override accent color per image. Defaults to brand orange `#FF4D1F`. Good alternates that feel on-brand: `#FFD166` (amber), `#8BE9FD` (cyan), `#B5E48C` (lime), `#C77DFF` (violet).
- `--out <path>` — always under `social/out/` unless the user wants elsewhere. Name files with kebab-case and a suffix for size: `booking-q2-2026-portrait.png`.

## After rendering

1. Tell the user the path of the generated file.
2. If the user might want multiple sizes (e.g., one post for IG square + LinkedIn landscape), offer to render both with one follow-up.
3. Use the Read tool with the PNG path to show the user the image inline.

## Copy guardrails

- **Lead with the point, not the noun.** Good: "Your business, AI-ready." Bad: "AI solutions for your business."
- **Don't prefix every title with "AI".** See `memory/project_positioning.md` — user has asked for AI keywords to feel subtle, not bolted on.
- **Short titles outperform.** Aim for ≤40 chars per line on square, ≤60 on portrait/landscape.
- **Subtitles are secondary.** Keep them as context, not a second headline.
- **Kicker = eyebrow tag.** "Manifesto", "Field note", "Playbook", "Case study", "Booking", "Release" — short uppercase labels that orient the reader.

## Troubleshooting

- **Glyph renders as a box** → character is outside Latin subset of the embedded fonts. Swap to ASCII or render as inline SVG (see `ctaPill` in `scripts/gen-post.mjs` for the pattern).
- **Fonts missing** → `npm install` to restore `@fontsource/space-grotesk` and `@fontsource/jetbrains-mono` devDependencies.
- **Text overflows canvas** → title is too long. Break with `\n`, shorten, or move to a larger `--size`.
