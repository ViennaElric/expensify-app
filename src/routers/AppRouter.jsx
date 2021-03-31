import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenceDashboardPage from './../components/ExpenceDashboardPage';
import AddExpencePage from './../components/AddExpencePage';
import EditExpencePage from './../components/EditExpencePage';
import Header from './../components/Header';
import HelpPage from './../components/HelpPage';
import NotFound from './../components/NotFoundPage';




const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenceDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpencePage}/>
                <Route path="/edit/:id" component={EditExpencePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter