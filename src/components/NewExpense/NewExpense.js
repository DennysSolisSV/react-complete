import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [newExpenseButton, setNewExpenseButton] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const newExpenseClick = () => {
        setNewExpenseButton(true);
    }

    const cancelNewExpenseClick = () =>{
        setNewExpenseButton(false);
    }

    if (newExpenseButton === false){
       return(
        <div className="new-expense">
            <button onClick={newExpenseClick}>Add Expense</button>
        </div>
    )}

    return (
        <div className="new-expense">
           <ExpenseForm onCancelClick={cancelNewExpenseClick} onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )

};

export default NewExpense;