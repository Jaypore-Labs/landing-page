# End-to-end content pipeline (local terminal)

> Article → site → X thread → LinkedIn post → Instagram carousel.
> Run from your laptop, once or twice a day.

## What we're building

A single command:

```bash
npm run publish -- <slug>
```

That command:

1. Verifies the article + carousel + thread + caption all exist.
2. Pushes to git → Vercel deploys → article is live in ~3 min.
3. Posts the X thread.
4. Posts the LinkedIn post.
5. Posts the IG carousel.
6. Prints the post URLs back to your terminal.

You run it. It runs to completion in ~90 seconds. Done for the day.

A second command for review-first flow:

```bash
npm run publish -- <slug> --dry-run
```

…prints what *would* be posted without actually posting. Use this until you trust the pipeline.

## What's already done

- `/daily-article` produces the article + carousel slides + IG caption + LinkedIn post + X thread.
- Site auto-deploys on git push.
- Per-article OG / Twitter share images render automatically.

What's missing is the four scripts: `post-x.mjs`, `post-linkedin.mjs`, `post-instagram.mjs`, and a `publish.mjs` orchestrator. Plus credentials.

## The honest framing on Instagram

Before you decide: Instagram is the friction point. Here are the real options:

### Option A — Meta Graph API in development mode (recommended)

Works today, officially, no app review wait. The catch: the app stays in "development mode," which means it can only post to IG accounts that are added as Developer / Admin / Tester roles on the app. Since you only need to post to *your own* IG account, this restriction doesn't matter.

**What this requires:**

1. A Facebook Page (free to create — it can be empty / dormant).
2. An Instagram Business or Creator account, linked to that Page. If `@jayporelabs` is currently a Personal account, you switch it in the IG app's settings (one tap, reversible, you keep all followers).
3. A Meta Developer App (free, takes 15 minutes).
4. Add yourself as a Developer on the app.
5. Generate a long-lived Page Access Token (60 days, then refresh).
6. Carousel images need to be on public HTTPS URLs. We solve this by serving them from `jayporelabs.com/social/<slug>/slide-*.png`.

**No app review needed** because we're never posting on behalf of *other* users' accounts. Only your own.

### Option B — `instagrapi` (unofficial)

Python library that talks to IG's private mobile API using your username + password. Works today, no app review. Risk: it's against IG's ToS and accounts using it heavily can get flagged. For 1-2 posts/day it's generally fine, but I cannot promise IG won't change something tomorrow that breaks it.

I'll set this up if you want, but I'd strongly recommend Option A.

### Option C — manual IG, automate the other two

We automate X and LinkedIn fully. The publish script opens Finder to the IG slides folder and copies the caption to your clipboard. You upload from your phone in 3 minutes. Zero IG infra cost, zero ToS exposure.

**My recommendation:** Option A. It's the right long-term answer and only ~30 minutes of setup on your side. If you want to ship today and figure out IG later, do Option C now and migrate to Option A this week.

## What I need from you

Send the credentials securely (1Password vault share, BitWarden, paste into a `.env` file you keep on your machine — never plain Slack/iMessage). I'll add them to `.env.local` which is git-ignored and read by the scripts.

### For X (~30 min on your side)

1. Go to <https://developer.x.com> and apply for a developer account if you don't have one. Approval is usually instant for non-commercial use.
2. Create a new App. Permissions: **Read and Write**.
3. Under "Authentication settings" → enable **OAuth 1.0a** with **Read and Write** permissions.
4. Generate keys. Send me:

```
X_API_KEY=...
X_API_SECRET=...
X_ACCESS_TOKEN=...
X_ACCESS_TOKEN_SECRET=...
```

5. Confirm: posts go to `@jayporelabs`?

### For LinkedIn (~45 min on your side)

This one is finicky. LinkedIn distinguishes between posting to *your personal profile* and *a company page*. I'll set up for the company page (`Jaypore Labs`) since that's the brand handle.

1. Go to <https://www.linkedin.com/developers/> and create a new App.
2. Associate the App with the `Jaypore Labs` company page (you must be an admin of the page).
3. Add the **"Share on LinkedIn"** product to the app.
4. Add the **"Sign In with LinkedIn using OpenID Connect"** product.
5. Add a redirect URL: `http://localhost:8765/callback` (we'll use this for the one-time auth flow).
6. Send me:

```
LINKEDIN_CLIENT_ID=...
LINKEDIN_CLIENT_SECRET=...
LINKEDIN_ORGANIZATION_URN=...   # urn:li:organization:NNNN — find on company page admin URL
```

7. I'll add a one-time `npm run linkedin:auth` script that pops a browser, you log in, the script captures the OAuth callback, exchanges for an access token, and writes it to `.env.local`. The token lasts 60 days; we'll refresh it.

8. Confirm: posts go to the `Jaypore Labs` company page?

### For Instagram via Option A (~30 min on your side)

1. If `@jayporelabs` is a Personal account, switch it to **Business** or **Creator** in the IG app: Settings → Account → Switch to Professional Account. Keeps all followers.
2. Create a Facebook Page if there isn't one (can be named `Jaypore Labs` and left dormant). Link the IG account to it: IG app → Settings → Account → Linked Accounts → Facebook.
3. Go to <https://developers.facebook.com> and create a new App. App type: **Business**.
4. Add the **Instagram Graph API** product.
5. In the app's "App Roles" section, confirm you're a Developer (or Admin).
6. Use the Graph API Explorer (<https://developers.facebook.com/tools/explorer/>) to:
   - Get a User Access Token with scopes `instagram_basic`, `instagram_content_publish`, `pages_show_list`, `pages_read_engagement`, `business_management`.
   - Exchange it for a long-lived (60-day) token. I'll send you the curl command for this.
   - Get the IG Business Account ID (we'll fetch it via the API once we have the token).
7. Send me:

```
META_APP_ID=...
META_APP_SECRET=...
META_LONG_LIVED_USER_TOKEN=...
IG_BUSINESS_ACCOUNT_ID=...
```

I'll add a `npm run ig:refresh` command to refresh the token before it expires (we can also wire a calendar reminder).

8. Decision on image hosting: I'd default to serving slides from `https://jayporelabs.com/social/<slug>/slide-N.png`. The site already serves `/public/*` automatically. Slides go in `public/social/<slug>/` for the duration of the post, then can stay there or be cleaned up.

## How the publish flow works

```
$ npm run publish -- ai-tools-for-engineers-getting-started

  ✓ Article exists at content/blog/ai-tools-for-engineers-getting-started.mdx
  ✓ X thread exists at social/threads/ai-tools-for-engineers-getting-started.md
  ✓ LinkedIn post exists at social/linkedin-posts/ai-tools-for-engineers-getting-started.md
  ✓ IG caption exists at social/carousels/ai-tools-for-engineers-getting-started/caption.md
  ✓ IG slides (6) exist

  → Pushing to git…
  ✓ Pushed to main; Vercel deploy in progress
  ⏳ Waiting 90s for site to be live…
  ✓ Article live at https://jayporelabs.com/blog/ai-tools-for-engineers-getting-started

  → Copying slides to public/social/… for IG hosting
  ✓ Slides accessible at https://jayporelabs.com/social/<slug>/slide-N.png

  → Posting X thread (10 tweets)…
  ✓ Thread posted: https://x.com/jayporelabs/status/1234567890

  → Posting to LinkedIn (Jaypore Labs)…
  ✓ Posted: https://www.linkedin.com/feed/update/urn:li:share:1234567890

  → Posting IG carousel…
  ✓ Posted: https://www.instagram.com/p/Cabc123/

  All done. Posted to:
    site:      https://jayporelabs.com/blog/ai-tools-for-engineers-getting-started
    x:         https://x.com/jayporelabs/status/1234567890
    linkedin:  https://www.linkedin.com/feed/update/urn:li:share:1234567890
    instagram: https://www.instagram.com/p/Cabc123/

  Logged to social/published.jsonl
```

If any step fails, the script stops and prints what to fix. It's idempotent — you can re-run with `--from <step>` to resume.

## What I'll build

Once you send credentials:

- `scripts/post-x.mjs` — reads thread file, posts via X API v2 with OAuth 1.0a.
- `scripts/post-linkedin.mjs` — reads LinkedIn post file, posts to the company page via LinkedIn API.
- `scripts/post-instagram.mjs` — uploads carousel via Meta Graph API (Option A).
- `scripts/publish.mjs` — the orchestrator above.
- `scripts/linkedin-auth.mjs` — one-time OAuth callback handler to get the LinkedIn token.
- `scripts/ig-refresh.mjs` — refreshes the IG long-lived token before it expires.
- `npm run publish`, `npm run publish:dry`, `npm run linkedin:auth`, `npm run ig:refresh` package scripts.
- `.env.local.example` showing required keys.
- `.gitignore` updated to exclude `.env.local`.
- A short `docs/PUBLISHING.md` runbook covering "what to do when X says…" and "the LinkedIn token expired."

Estimated build time: 4-6 hours focused. Ships today if you can get me credentials in the next couple of hours.

## Order of operations from your side

If you want to start today, do these in order. Each one unblocks me to build the next script:

1. **X credentials.** Easiest. ~30 min. Send keys, I ship `post-x.mjs` first.
2. **LinkedIn app + first auth.** ~45 min. Send creds, I ship `post-linkedin.mjs`.
3. **IG / Meta app.** ~30 min, plus the back-and-forth on the long-lived token. Send creds, I ship `post-instagram.mjs`.
4. **Test with a dry-run.** I run `npm run publish -- <some slug> --dry-run` against a recent article and we read the output together.
5. **First real post.** You run `npm run publish -- <slug>` for a real article. We watch the log together.

If you can get me X credentials in the next hour, X automation can be done by end of day. LinkedIn and IG follow as their credentials arrive.

## Open questions

1. **Posting cadence:** confirm 1-2x per day? On weekends too?
2. **Approval flow:** auto-post when you run the script, or always `--dry-run` first to review the rendered output?
3. **Failure behaviour:** if X posts but LinkedIn fails, do we retry LinkedIn or surface and let you decide?
4. **Time of day:** does the script need a "schedule for X time" feature, or do you run it whenever you mean to post?
5. **Logging:** I'll write each post's URLs to `social/published.jsonl` (append-only). Want a Slack ping too, or just the local log?

Answer those + send X credentials whenever you're ready and we start.
