-- ---------------------------------------------------------------------------
-- Inova Salgueiro — esquema inicial
--
-- Execute no SQL Editor do Supabase (ou via `supabase db push`).
-- Depois, preencha SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY na Vercel.
-- ---------------------------------------------------------------------------

create extension if not exists "pgcrypto";

-- Perfis administrativos ------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  email text not null,
  role text not null default 'editor'
    check (role in ('admin', 'governanca', 'lider_gt', 'editor')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Grupos de Trabalho ----------------------------------------------------------
create table if not exists public.working_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  short_description text,
  full_description text,
  objective text,
  icon text,
  color text,
  status text not null default 'active',
  meeting_frequency text,
  contact_name text,
  contact_email text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Manifestações de interesse --------------------------------------------------
create table if not exists public.interest_submissions (
  id uuid primary key default gen_random_uuid(),
  protocol text unique not null,
  full_name text not null,
  email text not null,
  phone text,
  city text,
  participation_type text,
  institution_name text,
  professional_area text,
  contribution_types text[] not null default '{}',
  motivation text,
  availability text,
  privacy_consent boolean not null default false,
  participation_rules_consent boolean not null default false,
  origin text not null default 'completo' check (origin in ('hero', 'completo')),
  status text not null default 'novo'
    check (status in (
      'novo', 'em_analise', 'contatado', 'aguardando_retorno',
      'encaminhado_para_gt', 'integrado', 'nao_selecionado', 'inativo'
    )),
  assigned_to uuid references public.profiles (id) on delete set null,
  first_contact_at timestamptz,
  integrated_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists interest_submissions_status_idx
  on public.interest_submissions (status);
create index if not exists interest_submissions_created_at_idx
  on public.interest_submissions (created_at desc);
create index if not exists interest_submissions_email_idx
  on public.interest_submissions (email);

-- Vínculo entre manifestações e GTs -------------------------------------------
-- Guardamos o slug para que o site funcione mesmo antes de os GTs serem
-- cadastrados na tabela working_groups.
create table if not exists public.submission_working_groups (
  submission_id uuid not null
    references public.interest_submissions (id) on delete cascade,
  working_group_slug text not null,
  primary key (submission_id, working_group_slug)
);

-- Notas internas --------------------------------------------------------------
create table if not exists public.submission_notes (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null
    references public.interest_submissions (id) on delete cascade,
  author_id uuid references public.profiles (id) on delete set null,
  note text not null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
--
-- Nenhuma policy libera leitura anônima: dados pessoais nunca são públicos.
-- A API do site grava usando a service role key, que ignora RLS por definição.
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.working_groups enable row level security;
alter table public.interest_submissions enable row level security;
alter table public.submission_working_groups enable row level security;
alter table public.submission_notes enable row level security;

create or replace function public.tem_papel(papeis text[])
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where profiles.id = auth.uid()
      and profiles.role = any (papeis)
  );
$$;

drop policy if exists "perfis visiveis para o proprio usuario" on public.profiles;
create policy "perfis visiveis para o proprio usuario"
  on public.profiles for select
  using (id = auth.uid() or public.tem_papel(array['admin']));

drop policy if exists "gts publicos para leitura autenticada" on public.working_groups;
create policy "gts publicos para leitura autenticada"
  on public.working_groups for select
  using (auth.role() = 'authenticated');

drop policy if exists "admins podem ver todas as manifestacoes" on public.interest_submissions;
create policy "admins podem ver todas as manifestacoes"
  on public.interest_submissions for select
  using (public.tem_papel(array['admin', 'governanca']));

drop policy if exists "admins podem atualizar manifestacoes" on public.interest_submissions;
create policy "admins podem atualizar manifestacoes"
  on public.interest_submissions for update
  using (public.tem_papel(array['admin', 'governanca']));

drop policy if exists "lideres veem manifestacoes do seu gt" on public.submission_working_groups;
create policy "lideres veem manifestacoes do seu gt"
  on public.submission_working_groups for select
  using (public.tem_papel(array['admin', 'governanca', 'lider_gt']));

drop policy if exists "notas visiveis para governanca" on public.submission_notes;
create policy "notas visiveis para governanca"
  on public.submission_notes for select
  using (public.tem_papel(array['admin', 'governanca']));

drop policy if exists "notas criadas por governanca" on public.submission_notes;
create policy "notas criadas por governanca"
  on public.submission_notes for insert
  with check (public.tem_papel(array['admin', 'governanca']));

-- Atualização automática de updated_at ----------------------------------------
create or replace function public.tocar_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists interest_submissions_updated_at on public.interest_submissions;
create trigger interest_submissions_updated_at
  before update on public.interest_submissions
  for each row execute function public.tocar_updated_at();

drop trigger if exists working_groups_updated_at on public.working_groups;
create trigger working_groups_updated_at
  before update on public.working_groups
  for each row execute function public.tocar_updated_at();

-- Carga inicial dos seis GTs ---------------------------------------------------
insert into public.working_groups (name, slug, short_description, sort_order)
values
  ('GT Governança', 'governanca', 'Define diretrizes, acompanha resultados e garante a sustentabilidade do movimento.', 1),
  ('GT Programas e Ações', 'programas-e-acoes', 'Estrutura e articula programas, projetos e ações que geram valor para o ecossistema.', 2),
  ('GT Ambientes de Inovação', 'ambientes-de-inovacao', 'Conecta laboratórios, coworkings, incubadoras e espaços makers do território.', 3),
  ('GT ICTIs', 'ictis', 'Integra as instituições científicas, tecnológicas e de inovação do território.', 4),
  ('GT Políticas Públicas', 'politicas-publicas', 'Propõe políticas para o desenvolvimento da inovação e acompanha sua implementação.', 5),
  ('GT Capital e Fomento', 'capital-e-fomento', 'Prospecta editais, parcerias e investimento para viabilizar as iniciativas.', 6)
on conflict (slug) do nothing;
