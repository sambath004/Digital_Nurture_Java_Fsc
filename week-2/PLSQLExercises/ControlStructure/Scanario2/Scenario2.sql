begin
  for cust in (select customer_id, balance from customers) loop
    if cust.balance > 10000 then
      update customers
         set isvip = 'true'
       where customer_id = cust.customer_id;
    end if;
  end loop;
  commit;
end;
/
select customer_id, balance, isvip
  from customers
 order by customer_id;
