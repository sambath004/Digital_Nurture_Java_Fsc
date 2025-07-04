
begin
  execute immediate 'drop table accounts';
exception when others then null;
end;
/
create table accounts (
  account_id number primary key,
  balance    number(15,2)
);
insert into accounts values (101,1000);
insert into accounts values (102,500);
insert into accounts values (103,200);
commit;
create or replace procedure transferfunds(
  p_from_acct in number,
  p_to_acct   in number,
  p_amount    in number
) is
  v_balance number;
begin
  select balance into v_balance
    from accounts
   where account_id = p_from_acct
     for update;
  if v_balance < p_amount then
    raise_application_error(-20001,'insufficient funds');
  end if;
  update accounts
     set balance = balance - p_amount
   where account_id = p_from_acct;
  update accounts
     set balance = balance + p_amount
   where account_id = p_to_acct;
  commit;
end;
/
exec transferfunds(101,102,300);
select account_id,balance from accounts order by account_id;
