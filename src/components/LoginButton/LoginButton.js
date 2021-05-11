import React from 'react';
import {useAuth0}from '@auth0/auth0-react';
import css from './login.module.css'


function LoginButton (){
    const {loginWithRedirect, isAuthenticated}= useAuth0();

    return(
        !isAuthenticated &&(
            <div className={css.btnContainer}>  
            <img src="./boost.png" alt="Boost logo" /> 
        <button className={css.loginBtn} onClick={()=>loginWithRedirect()}>
            Login
        </button>
        </div>
        )
    )
}

export default LoginButton;