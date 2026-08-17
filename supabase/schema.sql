-- F4QUUS platform — начальная схема.
-- Применить в Supabase SQL Editor после создания проекта.

create table if not exists quiz_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  neurotype_slug text not null,
  shining_element text not null,
  support_element text not null,
  answers jsonb not null,
  research_group_consent boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists quiz_leads_email_idx on quiz_leads (email);
create index if not exists quiz_leads_neurotype_idx on quiz_leads (neurotype_slug);

alter table quiz_leads enable row level security;

-- Публичная форма квиза пишет напрямую анонимным ключом — разрешаем
-- только вставку, без чтения/изменения чужих записей.
create policy "quiz_leads_public_insert"
  on quiz_leads for insert
  to anon
  with check (true);
