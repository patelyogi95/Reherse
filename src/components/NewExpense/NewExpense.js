import React from 'react';
import "./NewExpense.css";

import ExpenseForm from './ExpenseForm';

// we can pass data from child to parent by utilizing props as function
// in parent component and call the function in child component

const NewExpense = () => {
    return(
        <div className='new-expense'>
            <ExpenseForm />
        </div>
    )
};

export default NewExpense;