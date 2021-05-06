import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateExercise from '../../Pages/CreateExercise';
import CreateUser from '../../Pages/CreateUser';
import ExerciseList from '../../Pages/ExerciseList';
import Home from '../../Pages/Home';
import css from './navbar.module.css';
import Tracker from '../../Pages/Tracker';
import Chatroom from '../../Pages/Chat';
import PreviousRuns from '../../Pages/Routes';
import {useAuth0, User} from '@auth0/auth0-react';
import { UserContext } from "../UserContext/UseContext";

function Navbar(){

  const {user, isAuthenticated} = useAuth0();
  const [value,setValue]= useState("value from context")

return (
  isAuthenticated &&(
    <Router >
      <div>
        <nav >
          <ul className={css.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exerciseList">Event Tracker</Link>
            </li>
            {/* <li>
              <Link to="/editExercise">Edit Exercise</Link>
            </li> */}
            <li>
              <Link to="/createExercise">Create Exercise Log</Link>
            </li>
            <li>
              <Link to="/createUser">create User</Link>
            </li>
            <li>
              <Link to="/tracker">Track exercise</Link>
            </li>
            <li>
              <Link to="/chatroom">Chatroom</Link>
            </li>
            <li>
              <Link to="/previousroutes">Previous Routes</Link>
            </li>
          </ul>
        </nav>
        
        

        <div id="container">

        <UserContext.Provider value="hello from context">     
        <Switch>

          <Route path="/previousroutes">
            <PreviousRuns />
          </Route>
          <Route path="/chatroom">
            <Chatroom />
          </Route>
          <Route path="/tracker">
            <Tracker />
          </Route>
          <Route path="/createUser">
            <CreateUser />
          </Route>
          <Route path="/createExercise">
            <CreateExercise />
          </Route>
          {/* <Route path="/editExercise">
          <EditExerciseList />
          </Route> */}
          <Route path="/exerciseList">
            <ExerciseList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
             </UserContext.Provider>
        </div>
      </div>
    </Router>
  )
  );
};



export default Navbar;
