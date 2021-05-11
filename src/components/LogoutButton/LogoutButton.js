import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import css from './logout.module.css'

function LogoutButton(){
    const {logout, isAuthenticated}= useAuth0();
    return (
        isAuthenticated&&(
            
            <button className={css.btn} onClick={logout}>
            Logout
        </button>
        )
    )
}

export default LogoutButton;