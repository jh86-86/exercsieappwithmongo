import React, { Component} from 'react';
import axios from 'axios';

//create user page which has been depreciated as i now use auth zero but kept it as an
//example of component based react for my own personal learning



export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
        }

        console.log(user);
        let uri = process.env.REACT_APP_ATLAS_URI_MON;
        //never used axios before but have underthehood headers,options,method
        axios.post(`${uri}users/add`, user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            email: '',
        })
    }





    render() {
        return (
            <div className="container">
                <h3>Create New User for Events</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
};

