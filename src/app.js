import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
store.dispatch(addExpense({description:'Water Bill', amount:500, createdAt:2000}))
store.dispatch(addExpense({description:'Gas Bill', amount:900, createdAt:1000}))
store.dispatch(addExpense({description:'Rent', amount:1095, createdAt:5000}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)



const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);
// console.log(store.getState());

ReactDOM.render(jsx, document.getElementById("app"));


