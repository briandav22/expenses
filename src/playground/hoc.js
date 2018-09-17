//higher order compenents - a componenet (HOC) that renders a compenent . 
//reusue code
//render hijacking
//prop minipulation 
//Abstract state
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is the warning message</p>}
            <WrappedComponent {...props}/>    
        </div>
    )

};

const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ):(
              <p>please log in to view the info</p>  
            )}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true }info="Details Here"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false }info="Details Here"/>, document.getElementById('app'))