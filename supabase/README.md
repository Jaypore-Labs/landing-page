# Supabase setup for Jaypore Labs

The contact form on `/contact` posts inquiries to a Supabase `inquiries` table via a Next.js Server Action.

## 1. Create the table

Open **Supabase Dashboard → SQL Editor → New query**, paste [`migrations/0001_inquiries.sql`](./migrations/0001_inquiries.sql), and run it once.

## 2. Set environment variables

Either install the Supabase integration from **Vercel Marketplace** (auto-wires env), or add these two vars manually to the Vercel project (Settings → Environment Variables), for Production + Preview:

| Key | Where to find it |
| --- | --- |
| `SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API → Project API keys → `service_role` (secret) |

> **Never** expose `SUPABASE_SERVICE_ROLE_KEY` to the browser. It's used only by `src/app/contact/actions.ts`, which runs on the server.

## 3. Verify

Submit the form on `/contact`. You should see a row appear in **Table Editor → inquiries** within a second.

If env is missing, the server action falls back to a `console.log("[inquiry]", …)` on the Vercel function logs so nothing gets lost during setup.

## 4. Security model

Row Level Security is enabled on the table. No policies are granted to `anon` or `authenticated`, so client-side code cannot read or write. The Server Action uses the `service_role` key, which bypasses RLS.

When you later build an internal dashboard to review inquiries, either:
- Keep using the `service_role` key from a server-only admin surface, or
- Add RLS policies that restrict reads to a specific user / role.
