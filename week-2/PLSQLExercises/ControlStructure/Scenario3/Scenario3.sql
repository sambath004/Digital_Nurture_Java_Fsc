set serveroutput on;

begin
  for loan_rec in (
    select loan_id, customer_id, due_date
      from loans
     where due_date <= sysdate + 30
  ) loop
    dbms_output.put_line(
      'reminder: loan ' || loan_rec.loan_id ||
      ' for customer ' || loan_rec.customer_id ||
      ' is due on ' || to_char(loan_rec.due_date,'dd-mon-yyyy')
    );
  end loop;
end;
/
select loan_id, customer_id, to_char(due_date,'dd-mon-yyyy') as due_date
  from loans
 order by loan_id;
