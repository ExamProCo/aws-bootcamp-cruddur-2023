-- https://www.postgresql.org/docs/current/uuid-ossp.html
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- forcefully drop our tables if they already exist
DROP TABLE IF EXISTS public.users cascade;
DROP TABLE IF EXISTS public.activities;

CREATE TABLE public.users (
  uuid UUID default uuid_generate_v4() primary key,
  display_name text,
  handle text,
  cognito_user_id text,
  created_at timestamp default current_timestamp NOT NULL
);

CREATE TABLE public.activities (
  uuid UUID default uuid_generate_v4() primary key,
  user_uuid UUID REFERENCES public.users(uuid) NOT NULL,
  message text NOT NULL,
  replies_count integer default 0,
  reposts_count integer default 0,
  likes_count integer default 0,
  reply_to_activity_uuid integer,
  expires_at timestamp,
  created_at timestamp default current_timestamp NOT NULL
);