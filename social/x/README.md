# X (Twitter) launch kit — Jaypore Labs

X is where our target audience — founders, AI engineers, DevTools builders, healthcare operators — actually reads in public. This kit preps the account to land there with a clear identity on day one.

---

## 1. Assets in this folder

| File | Size | Where it goes |
| --- | --- | --- |
| `header.png` | 3000×1000 | Profile header (X crops for display) |
| `avatar-dark.png` | 2160×2160 | Profile photo (primary) — crops to circle |
| `avatar-accent.png` | 2160×2160 | Alt profile photo (orange stamp variant) |
| `pinned-positioning.png` | 3200×1800 | Image for the pinned tweet |

---

## 2. Profile setup

### Display name (50 chars)
> **Jaypore Labs**

### Handle
> **@jayporelabs**

### Bio (160 chars)

```
AI-enabled software for real businesses ·
friendly product studio · shipping since 2017 ·
India · remote-worldwide · hello@jayporelabs.com
```

(152 chars with spaces. Trims cleanly to 160.)

### Location
> **India · Remote-worldwide**

### Website
> `jayporelabs.com`

### Header
Upload `header.png`. X crops it 3:1 — the template already reserves the bottom-left and keeps the tagline clear.

### Profile photo
Upload `avatar-dark.png`.

---

## 3. Pinned tweet (launch post)

Paste this as a tweet with `pinned-positioning.png` attached, then pin it:

```
We don't ship AI. We ship AI-enabled software.

We build the software around it — scribes, copilots, agents, voice, full SaaS — and we help businesses put AI to work without rewriting what already runs.

8+ years. Global consumer brands, clinics in Europe, ambitious founders.

Say hi: jayporelabs.com
```

---

## 4. First-week threads (3 launch threads)

Run one per week for the first three weeks. Each is a mini-manifesto. Images optional — mostly text carries on X.

### Thread 1 — Positioning

```
1/ A small distinction with big consequences:

We don't ship AI. We ship AI-enabled software.

Here's what that means, and why it matters.

2/ AI is the material, not the product.

The product is a scribe that saves a doctor 3 hours a day. A voice assistant a surgeon can use hands-free. A clinic OS running across Luxembourg. A wellness app backed by Logitech.

3/ The hard part is never the LLM.

It's the plumbing — privacy, integrations, eval harnesses, specialty-tuned prompts, the workflow respect. That's where we spend 80% of our time.

4/ When AI earns its keep, we lean in.

When it doesn't, we tell you. Half the time, a rule or a form solves the problem better than a model. We'd rather ship real than sound smart.

5/ If you're adding AI to what you already run — or building something new with AI inside — we can help.

jayporelabs.com
```

### Thread 2 — Playbook: adopting AI in a clinic

```
1/ Three ways to introduce AI to a clinic. Hard-earned lessons:

2/ Pick one specialty. Not all of them.

Documentation patterns in psychiatry look nothing like pediatrics. A scribe that tries to do both ships neither well. Start narrow.

3/ Ship to one doctor. Not ten.

Ten doctors = ten workflow edge cases and a month of debugging before anyone trusts it. One doctor = one feedback loop, shipped by Friday, refined next week.

4/ Measure minutes saved. Not tokens used.

Minutes saved per note is what the clinic cares about. Tokens used is a vanity metric. Align with the buyer.

5/ The reason AI adoption stalls in regulated industries isn't the tech. It's rolling it out without collapsing the workflow that already works.

Full write-up: jayporelabs.com/blog
```

### Thread 3 — Behind-the-scenes: Friday demos

```
1/ Every Friday at Jaypore Labs we ship a demo.

Not a slide. Not a Loom. A link to something working, usually in production already.

Here's why that cadence matters more than any backlog:

2/ Weekly demos force you to finish something.

No "I'll have it next sprint." The clock says Friday. You scope down until it's real. The backlog stops mattering; the demo matters.

3/ Weekly demos put risk in front of the client early.

Technical debt, compliance concerns, UX hiccups — all visible in week 2, not week 12.

4/ Weekly demos keep us honest.

If you can't show it working, you can't say it works. We hold ourselves to it even when a week is ugly.

5/ We've shipped 50+ products this way. No gantts. No all-hands stand-ups. Just: what did we put in front of a real user this week?

Try it next sprint.
```

---

## 5. Cadence (first three months)

| Day | Type | Note |
| --- | --- | --- |
| Mon | Essay thread | Long-form — pull from daily-article skill output |
| Tue | Single tweet / field note | 1-liner with a stat or observation |
| Wed | Screenshot / build log | "This week we shipped…" with an image |
| Thu | Reply day | Engage 10 accounts in your space, no posts |
| Fri | Playbook | How-we-work or behind-the-scenes |
| Sat | — | Off |
| Sun | Weekly digest | Link to the week's blog posts |

Keep replies human. Avoid "growth hack" tone. Don't post every hour; post one great thing a day.

---

## 6. Regenerate assets

```bash
# X header
npm run gen:post -- --template banner --size x-header \
  --title "AI-enabled software\nfor real businesses." \
  --subtitle "Friendly product studio. We help teams put AI to work." \
  --kicker "Est. 2017" \
  --out social/x/header.png

# Pinned tweet image
npm run gen:post -- --template quote --size landscape \
  --title "We don't ship AI.\nWe ship AI-enabled software." \
  --subtitle "And we help businesses put it to work. Since 2017." \
  --kicker "Positioning" \
  --out social/x/pinned-positioning.png
```
