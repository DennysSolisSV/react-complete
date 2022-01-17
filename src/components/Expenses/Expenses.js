import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setYear] = useState('2022');

  const onYearChangeHandler = (selectedYear) => {
      setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
 

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
    <li>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearChange={onYearChangeHandler}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </li>
  );
};

export default Expenses;
