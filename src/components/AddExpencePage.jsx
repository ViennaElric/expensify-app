import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

const AddExpencePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('');
            }}
        />
    </div>
);

export default connect()(AddExpencePage);