import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateExercise from '../../Pages/CreateExercise';
import CreateUser from '../../Pages/CreateUser';
import EditExerciseList from '../../Pages/EditExerciseList';
import ExerciseList from '../../Pages/ExerciseList';
import Home from '../../Pages/Home';
import css from './navbar.module.css';

function Navbar(){
return (

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
          </ul>
        </nav>
        

        <div id="container">
        <Switch>
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
        </div>
      </div>
    </Router>
    
  );
};


export default Navbar;
