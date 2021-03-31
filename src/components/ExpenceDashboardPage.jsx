import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ListExpense from './ListExpense';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenceDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ListExpense />
    </div>
);

export default ExpenceDashboardPage