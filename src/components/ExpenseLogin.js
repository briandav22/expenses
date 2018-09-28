import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const ExpenseLogin = ({startLogin})=>(
    <div className="box-layout"> 
    
    <div className="box-layout__box">
        <h1 className="box-layout__title">App</h1>
        <p>Track Expenses</p>
        <button className="button" onClick={startLogin}>Log In with Google</button>
    </div>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(ExpenseLogin)
