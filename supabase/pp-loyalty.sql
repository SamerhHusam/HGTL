-- HGTL Partnered Point database — run once in Supabase SQL Editor.
create sequence if not exists public.pp_member_number_seq start 100001;

create table if not exists public.pp_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  member_number text not null unique,
  full_name text,
  phone text unique,
  role text not null default 'customer' check (role in ('customer','admin')),
  total_points integer not null default 0 check (total_points >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pp_transactions (
  id bigint generated always as identity primary key,
  member_id uuid not null references public.pp_profiles(id) on delete cascade,
  type text not null check (type in ('purchase','adjustment','redemption')),
  amount_sar numeric(12,2),
  points integer not null,
  description text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);
create index if not exists pp_transactions_member_created_idx on public.pp_transactions(member_id, created_at desc);

create or replace function public.pp_handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  insert into public.pp_profiles(id, member_number, full_name, phone)
  values(new.id, 'PP-' || lpad(nextval('public.pp_member_number_seq')::text, 6, '0'),
         nullif(new.raw_user_meta_data->>'full_name',''), new.phone)
  on conflict (id) do nothing;
  return new;
end; $$;
drop trigger if exists pp_on_auth_user_created on auth.users;
create trigger pp_on_auth_user_created after insert on auth.users for each row execute procedure public.pp_handle_new_user();

create or replace function public.pp_is_admin()
returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.pp_profiles where id=auth.uid() and role='admin');
$$;

alter table public.pp_profiles enable row level security;
alter table public.pp_transactions enable row level security;
drop policy if exists "member reads own profile" on public.pp_profiles;
create policy "member reads own profile" on public.pp_profiles for select to authenticated using (id=auth.uid() or public.pp_is_admin());
drop policy if exists "member reads own transactions" on public.pp_transactions;
create policy "member reads own transactions" on public.pp_transactions for select to authenticated using (member_id=auth.uid() or public.pp_is_admin());

create or replace function public.pp_admin_add_purchase(p_member_id uuid, p_amount numeric, p_description text default 'مشتريات HGTL')
returns integer language plpgsql security definer set search_path=public as $$
declare v_points integer;
begin
  if not public.pp_is_admin() then raise exception 'admin access required'; end if;
  if p_amount < 10 then raise exception 'amount must be at least 10 SAR'; end if;
  v_points := floor(p_amount / 10)::integer;
  insert into public.pp_transactions(member_id,type,amount_sar,points,description,created_by)
  values(p_member_id,'purchase',p_amount,v_points,nullif(trim(p_description),''),auth.uid());
  update public.pp_profiles set total_points=total_points+v_points,updated_at=now() where id=p_member_id and role='customer';
  if not found then raise exception 'member not found'; end if;
  return v_points;
end; $$;

create or replace function public.pp_admin_adjust_points(p_member_id uuid, p_points integer, p_description text)
returns integer language plpgsql security definer set search_path=public as $$
declare v_balance integer;
begin
  if not public.pp_is_admin() then raise exception 'admin access required'; end if;
  if p_points = 0 or nullif(trim(p_description),'') is null then raise exception 'points and reason are required'; end if;
  update public.pp_profiles set total_points=total_points+p_points,updated_at=now()
    where id=p_member_id and role='customer' and total_points+p_points>=0 returning total_points into v_balance;
  if v_balance is null then raise exception 'member not found or insufficient balance'; end if;
  insert into public.pp_transactions(member_id,type,points,description,created_by)
  values(p_member_id,case when p_points < 0 then 'redemption' else 'adjustment' end,p_points,p_description,auth.uid());
  return v_balance;
end; $$;

revoke all on function public.pp_admin_add_purchase(uuid,numeric,text) from public;
revoke all on function public.pp_admin_adjust_points(uuid,integer,text) from public;
grant execute on function public.pp_admin_add_purchase(uuid,numeric,text) to authenticated;
grant execute on function public.pp_admin_adjust_points(uuid,integer,text) to authenticated;
grant execute on function public.pp_is_admin() to authenticated;

-- After the owner signs in once, run this with the real owner phone:
-- update public.pp_profiles set role='admin' where phone='+9665XXXXXXXX';
