import React, { Component } from 'react';
import axios from 'axios';

//using component based react to learn alittle bit about it



const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>

        {/* An option to delete but decided against it 
        <td>
            <button onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>
        </td> */}

    </tr>
)





export default class ExerciseList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = { exercises: [] };
    }

    componentDidMount() {
        let uri = process.env.REACT_APP_ATLAS_URI_MON;
        axios.get(`${uri}exercises`)
            .then(response => {
                console.log(response.data)
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    deleteExercise(id) {
        let uri = process.env.REACT_APP_ATLAS_URI_MON;
        axios.delete(`${uri}exercises/` + id)
            .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)//will rerender page on change of state, when el does not equal id that we are deleting will remove that id
        })
    }

    exerciseList() {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />;
        })
    }





    render() {
        return (
            <div className="container">
                <h3>Logged Exercises</h3>
                <h4>See what you and other users have been up to:</h4>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}

                    </tbody>
                </table>
            </div>
        )
    }
}