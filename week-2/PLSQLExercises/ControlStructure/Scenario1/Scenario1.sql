begin
  for cust in (select customer_id, interest_rate, age from customers) loop
    if cust.age > 60 then
      update customers
      set interest_rate = interest_rate - 1
      where customer_id = cust.customer_id;
    end if;
  end loop;
end;
/
SELECT * FROM savings_accounts;
