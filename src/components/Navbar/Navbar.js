import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateExercise from '../../Pages/CreateExercise';
import ExerciseList from '../../Pages/ExerciseList';
import Home from '../../Pages/Home';
import css from './navbar.module.css';
import Tracker from '../../Pages/Tracker';
import Chatroom from '../../Pages/Chat';
import PreviousRuns from '../../Pages/Routes';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from "../UserContext/UseContext";


function Navbar() {

  const { user,isAuthenticated } = useAuth0();
  const[dbUser]= useState(user);
  console.log(dbUser)

  return (
    isAuthenticated && (
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
              <li>
                <Link to="/createExercise">Create Exercise Log</Link>
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


              <UserContext.Provider value={dbUser}>
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
