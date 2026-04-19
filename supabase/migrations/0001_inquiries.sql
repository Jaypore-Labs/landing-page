-- Jaypore Labs: inquiries table
-- Captures contact-form submissions from the website.
-- Run once in Supabase SQL editor (Dashboard → SQL → New Query).

create extension if not exists "pgcrypto";

create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text,
  budget      text,
  message     text not null,
  source      text default 'jayporelabs.com',
  notes       text,
  status      text not null default 'new'
              check (status in ('new', 'in_review', 'replied', 'closed', 'spam'))
);

create index if not exists inquiries_created_at_idx
  on public.inquiries (created_at desc);

create index if not exists inquiries_status_idx
  on public.inquiries (status);

-- Lock it down: no anon / authenticated access.
-- The Next.js Server Action uses the SERVICE_ROLE key which bypasses RLS.
alter table public.inquiries enable row level security;

-- No policies → public roles cannot read or write.
-- If you later add a dashboard, grant selective policies or use service-role only.

comment on table public.inquiries is
  'Contact-form submissions from jayporelabs.com. Written by server-side action using service role.';
