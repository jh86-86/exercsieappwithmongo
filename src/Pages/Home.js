import React,{useContext}from 'react';
import {useAuth0} from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';  //makes a hook for making JSON data pretty;
import {UserContext} from '../components/UserContext/UseContext'

function Home(){

  const msg= useContext({UserContext});

  const {user, isAuthenticated} = useAuth0();  //isAuthenticated will only render when logged in
    return(
      isAuthenticated &&(
     <div className="container">
       <img src={user.picture} alt={user.name} />
       <h2>{user.name}</h2>
      <JSONPretty data={user} /> 
        <div>{msg} here</div>
       
    </div>
      )
    )
};

export default Home;