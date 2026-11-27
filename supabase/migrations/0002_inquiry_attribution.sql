-- Self-reported attribution: how the lead found us and, if it was an AI
-- assistant, the prompt they used. Lets us see which AI searches recommend us.
alter table public.inquiries
  add column if not exists heard_from text,
  add column if not exists ai_prompt  text;

create index if not exists inquiries_heard_from_idx
  on public.inquiries (heard_from);
