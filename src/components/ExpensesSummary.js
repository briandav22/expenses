import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import {Link} from 'react-router-dom'

export const ExpensesSummary = (props)=>{

    
    const total = expensesTotal(props.expenses)
    const length = (props.expenses).length
    const expenseWord = length === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal =  numeral(total/100).format('$0,0.00')
    return(

    <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{length }</span> {expenseWord} total expenses are <span>{formatedExpensesTotal }</span>
        </h1>
        <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link></div>
        </div>

    </div>)
}


const mapStatetoProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStatetoProps)(ExpensesSummary);
