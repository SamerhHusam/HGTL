-- Partnered Point upgrade: owner-created memberships + automatic account linking.
-- Run once in Supabase SQL Editor AFTER pp-loyalty.sql.

create extension if not exists pgcrypto;

create table if not exists public.pp_members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete set null,
  member_number text not null unique default ('PP-' || lpad(nextval('public.pp_member_number_seq')::text, 6, '0')),
  full_name text not null,
  phone text not null unique,
  total_points integer not null default 0 check (total_points >= 0),
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.pp_members(id,user_id,member_number,full_name,phone,total_points,created_at,updated_at)
select id,id,member_number,coalesce(nullif(full_name,''),'عضو PP'),phone,total_points,created_at,updated_at
from public.pp_profiles
where role='customer' and phone is not null
on conflict do nothing;

alter table public.pp_transactions drop constraint if exists pp_transactions_member_id_fkey;
alter table public.pp_transactions
  add constraint pp_transactions_member_id_fkey foreign key(member_id) references public.pp_members(id) on delete cascade;
create index if not exists pp_members_phone_idx on public.pp_members(phone);

alter table public.pp_members enable row level security;
drop policy if exists "member reads own membership" on public.pp_members;
create policy "member reads own membership" on public.pp_members for select to authenticated
using (user_id=auth.uid() or public.pp_is_admin());

drop policy if exists "member reads own transactions" on public.pp_transactions;
create policy "member reads own transactions" on public.pp_transactions for select to authenticated
using (
  exists(select 1 from public.pp_members m where m.id=member_id and m.user_id=auth.uid())
  or public.pp_is_admin()
);

create or replace function public.pp_handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
declare v_name text;
begin
  v_name := coalesce(nullif(trim(new.raw_user_meta_data->>'full_name'),''),'عضو PP');
  insert into public.pp_profiles(id,member_number,full_name,phone)
  values(new.id,'PP-'||lpad(nextval('public.pp_member_number_seq')::text,6,'0'),v_name,new.phone)
  on conflict(id) do update set full_name=coalesce(excluded.full_name,pp_profiles.full_name),phone=excluded.phone,updated_at=now();

  if new.phone is not null then
    insert into public.pp_members(user_id,full_name,phone)
    values(new.id,v_name,new.phone)
    on conflict(phone) do update set
      user_id=excluded.user_id,
      full_name=case when pp_members.full_name='عضو PP' then excluded.full_name else pp_members.full_name end,
      updated_at=now();
  end if;
  return new;
end; $$;

create or replace function public.pp_admin_create_member(p_full_name text,p_phone text)
returns public.pp_members language plpgsql security definer set search_path=public as $$
declare v_member public.pp_members;
begin
  if not public.pp_is_admin() then raise exception 'admin access required'; end if;
  if nullif(trim(p_full_name),'') is null then raise exception 'full name is required'; end if;
  if p_phone !~ '^\+9665[0-9]{8}$' then raise exception 'invalid Saudi mobile number'; end if;

  insert into public.pp_members(full_name,phone,created_by)
  values(trim(p_full_name),p_phone,auth.uid())
  on conflict(phone) do update set full_name=excluded.full_name,updated_at=now()
  returning * into v_member;
  return v_member;
end; $$;

create or replace function public.pp_admin_add_purchase(p_member_id uuid,p_amount numeric,p_description text default 'مشتريات HGTL')
returns integer language plpgsql security definer set search_path=public as $$
declare v_points integer;
begin
  if not public.pp_is_admin() then raise exception 'admin access required'; end if;
  if p_amount < 10 then raise exception 'amount must be at least 10 SAR'; end if;
  v_points := floor(p_amount/10)::integer;
  update public.pp_members set total_points=total_points+v_points,updated_at=now() where id=p_member_id;
  if not found then raise exception 'member not found'; end if;
  insert into public.pp_transactions(member_id,type,amount_sar,points,description,created_by)
  values(p_member_id,'purchase',p_amount,v_points,coalesce(nullif(trim(p_description),''),'مشتريات HGTL'),auth.uid());
  return v_points;
end; $$;

create or replace function public.pp_admin_adjust_points(p_member_id uuid,p_points integer,p_description text)
returns integer language plpgsql security definer set search_path=public as $$
declare v_balance integer;
begin
  if not public.pp_is_admin() then raise exception 'admin access required'; end if;
  if p_points=0 or nullif(trim(p_description),'') is null then raise exception 'points and reason are required'; end if;
  update public.pp_members set total_points=total_points+p_points,updated_at=now()
  where id=p_member_id and total_points+p_points>=0 returning total_points into v_balance;
  if v_balance is null then raise exception 'member not found or insufficient balance'; end if;
  insert into public.pp_transactions(member_id,type,points,description,created_by)
  values(p_member_id,case when p_points<0 then 'redemption' else 'adjustment' end,p_points,p_description,auth.uid());
  return v_balance;
end; $$;

revoke all on function public.pp_admin_create_member(text,text) from public;
grant execute on function public.pp_admin_create_member(text,text) to authenticated;
grant execute on function public.pp_admin_add_purchase(uuid,numeric,text) to authenticated;
grant execute on function public.pp_admin_adjust_points(uuid,integer,text) to authenticated;

