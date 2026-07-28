create table users (
  id text primary key,
  name text not null,
  contact text unique not null,
  preferred_language text not null default 'English',
  created_at timestamptz not null default now()
);

create table citizen_profiles (
  id text primary key,
  user_id text not null references users(id) on delete cascade,
  state text not null,
  district text not null,
  income_band text not null,
  occupation text not null,
  household_size integer not null,
  primary_need text not null,
  has_aadhaar boolean not null default false,
  has_bank_account boolean not null default false,
  completion_percent integer not null default 0
);

create table schemes (
  id text primary key,
  slug text unique not null,
  title text not null,
  category text not null,
  state text not null,
  ministry text not null,
  benefit text not null,
  amount text not null,
  deadline text not null
);

create table scheme_requirements (
  id text primary key,
  scheme_id text not null references schemes(id) on delete cascade,
  kind text not null check (kind in ('eligibility', 'document')),
  label text not null
);

create table applications (
  id text primary key,
  user_id text not null references users(id) on delete cascade,
  scheme_id text not null references schemes(id) on delete cascade,
  status text not null check (status in ('draft', 'submitted', 'under_review', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
