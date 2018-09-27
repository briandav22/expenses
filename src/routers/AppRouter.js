import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';

import ExpenseLogin from '../components/ExpenseLogin';
import PrivateRoute from './PrivateRoute'


export const history = createHistory();

const AppRouter = () =>(
    <Router history = {history}>
    <div>

    <Switch>
        <Route exact ={true} path = "/" component ={ExpenseLogin}/>
        <PrivateRoute path = "/dashboard" component ={ExpenseDashboard}/>
        <PrivateRoute path = "/create" component ={AddExpensePage}/>
        <PrivateRoute path = "/edit/:id" component ={EditPage}/>
        <Route path = "/help" component ={HelpPage}/>
        <Route component = {PageNotFound}/>
    </Switch>
    </div>        
    </Router>
);

export default AppRouter;