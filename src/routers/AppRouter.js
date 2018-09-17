import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import PageHeader from '../components/PageHeader';



const AppRouter = () =>(
    <BrowserRouter>
    <div>
        <PageHeader/>
    <Switch>
        <Route exact ={true} path = "/" component ={ExpenseDashboard}/>
        <Route path = "/create" component ={AddExpensePage}/>
        <Route path = "/edit/:id" component ={EditPage}/>
        <Route path = "/help" component ={HelpPage}/>
        <Route component = {PageNotFound}/>
    </Switch>
    </div>        
    </BrowserRouter>
);

export default AppRouter;