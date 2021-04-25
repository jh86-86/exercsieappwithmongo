
import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername= this.onChangeUsername.bind(this);
        this.onChangeDescription= this.onChangeDescription.bind(this);
        this.onChangeDuration= this.onChangeDuration.bind(this);
        this.onChangeDate= this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            username:"",
            description:"",
            duration:0,
            date: new Date(),
            users:[]
        }
    }

    //hardcoded example prior to pulling from mongoDB
    //component did mount is  a react lifecycle method
    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: "test user",
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault(); //prevents default behaviour of HTML
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }
        console.log(exercise);
        window.location = '/'; //brings it back to home page
        console.log(exercise);
    }
    

    render() {
        return(
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group"> 
                    <label>Username: </label>
                    <select ref="userInput"  //need to change this later to either the callback pattern or the createRef API instead.
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user){  //will bring all users from database and map them as options
                                return <option
                                    key={user}
                                    value={user}>
                                        {user}
                                    </option>;
                            })
                        }
                     </select>
                   </div>
                   <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                  <div className="form-group">
                      <input type="submit" value="Create exercise log" className="btn btn-primary" />
                  </div>
                </form> 
            </div>
            )
    }

}
    