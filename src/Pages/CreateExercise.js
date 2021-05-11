
import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { UserContext } from '../components/UserContext/UseContext';



function CreateExercise() {

    //using the email's username as the username
    const dbUser = useContext(UserContext);
    console.log(dbUser.name + " this should be dbuser")

//the state which each function updates
    const [newExercise, setExercise] = useState({
        username: dbUser.name,
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    });


//exercise description from input
    function onChangeDescription(e) {
        setExercise({...newExercise,
            description: e.target.value
        });
    }
//exercise duration updated through input
    function onChangeDuration(e) {
        setExercise({...newExercise,
            duration: e.target.value
        });
    }

    function onChangeDate(date) {
        setExercise({...newExercise,
            date: date
        });
    }


//submits the form to the backend with an object of exercise
    function onSubmit(e) {
        e.preventDefault(); //prevents default behaviour of HTML
        const exercise = {
            username: newExercise.username,
            description: newExercise.description,
            duration: newExercise.duration,
            date: newExercise.date,
        }
        let uri = process.env.REACT_APP_ATLAS_URI_MON;
        console.log(exercise);

        axios.post(`${uri}exercises/add`, exercise)
            .then(res => console.log(res.data));
        //window.location = '/'; //brings it back to home page
        alert('Exercise created')
    }


    return (
        <div className="container">
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text"
                        required
                        className="form-control"
                        //value={newExercise.description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="number"
                        className="form-control"
                        //value={newExercise.duration}
                        onChange={onChangeDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={newExercise.date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create exercise log" className="btn btn-primary" style={{backgroundColor: "gold", color:'black', border:'2px solid black'}}/>
                </div>
            </form>
        </div>
    )
}


export default CreateExercise;

