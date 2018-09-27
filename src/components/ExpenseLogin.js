import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const ExpenseLogin = ({startLogin})=>(
    <div> <h1>Please Login</h1>
    <button onClick={startLogin}>Log In</button>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(ExpenseLogin)
