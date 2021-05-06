import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import './App.css';
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from './components/LogoutButton/LogoutButton';
import {useAuth0} from '@auth0/auth0-react';
import { UserContext } from "./components/UserContext/UseContext";

import React,{useState} from 'react';


function App() {
  const {isLoading}= useAuth0();
 
  if(isLoading) return <div>Loading...</div> //if auth0 zero is loading return this
  return (
    <div>
      <LoginButton />
      
      <UserContext.Provider value="hello from context">     
      <Navbar />
      <LogoutButton  />
      </UserContext.Provider>
   
    </div>

  );
}

export default App;
