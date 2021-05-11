import React, { useState } from "react";
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
//import Chatroom from '../../Pages/UnusedPages/Chat';
import PreviousRuns from '../../Pages/Routes';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from "../UserContext/UseContext";


function Navbar() {

  const { user, isAuthenticated } = useAuth0();
  const [dbUser] = useState(user);
  console.log(dbUser)

  return (
    isAuthenticated && (
      <Router >
        <div>
          <nav >
            <ul className={css.navbar}>
              <li>
                <Link to="/">
                  <span class={css.text}>Home</span>
                  <span class={css.icon}><img alt="home" src="https://img.icons8.com/android/24/000000/home.png" /></span>
                </Link>
              </li>
              <li>
                <Link to="/exerciseList">
                  <span class={css.text}>Tracker</span>
                  <span class={css.icon}><img alt="tracker" src="https://img.icons8.com/plumpy/24/000000/log.png" /></span>
                </Link>
              </li>
              <li>
                <Link to="/createExercise"> 
                <span class={css.text}>Create Exercise</span>
                  <span class={css.icon}><img alt="create exercise" src="https://img.icons8.com/material-sharp/24/000000/add-rule.png" /></span></Link>
              </li>
              <li>
                <Link to="/tracker"> 
                <span class={css.text}>Track Exercise</span>
                  <span class={css.icon}><img alt="track exercise" src="https://img.icons8.com/plumpy/24/000000/track-order.png"/></span></Link>
              </li>
              {/* <li>
                <Link to="/chatroom">Chatroom</Link>
              </li> */}
              <li>
                <Link to="/previousroutes">
                <span class={css.text}>Previous Routes</span>
                  <span class={css.icon}><img alt="Previous routes" src="https://img.icons8.com/metro/26/000000/running.png"/></span>
                </Link>
              </li>
            </ul>
          </nav>



          <div id={css.container}>


            <UserContext.Provider value={dbUser}>
              <Switch>
                <Route path="/previousroutes">
                  <PreviousRuns />
                </Route>
                {/* <Route path="/chatroom">
                  <Chatroom /> */}
                {/* </Route> */}
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
