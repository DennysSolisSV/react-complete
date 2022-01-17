import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setYear] = useState('2022');

  const onYearChangeHandler = (selectedYear) => {
      setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
  } 

  // { filteredExpenses.length === 0 ? ( <p>No expenses found.</p>) : (
  //   filteredExpenses.map((expense) => (
  //     <ExpenseItem 
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // )}

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler}/>
      {expenseContent}
    </Card>
  );
};

export default Expenses;
