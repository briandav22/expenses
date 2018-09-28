import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import PageNotFound from '../components/PageNotFound';
import ExpenseLogin from '../components/ExpenseLogin';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () =>(
    <Router history = {history}>
    <div>

    <Switch>
        <PublicRoute exact ={true} path = "/" component ={ExpenseLogin}/>
        <PrivateRoute path = "/dashboard" component ={ExpenseDashboard}/>
        <PrivateRoute path = "/create" component ={AddExpensePage}/>
        <PrivateRoute path = "/edit/:id" component ={EditPage}/>
        <Route component = {PageNotFound}/>
    </Switch>
    </div>        
    </Router>
);

export default AppRouter;