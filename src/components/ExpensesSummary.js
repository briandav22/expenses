import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = (props)=>{

    
    const total = expensesTotal(props.expenses)
    const length = (props.expenses).length
    const expenseWord = length === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal =  numeral(total/100).format('$0,0.00')
    return(

    <div>
    <h1>Viewing {length } {expenseWord} total expenses are {formatedExpensesTotal }
    </h1>

    </div>)
}


const mapStatetoProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStatetoProps)(ExpensesSummary);
