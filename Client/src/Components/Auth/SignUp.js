import React from "react";
import { USER_API } from '../../Services/user.connectToDB.js';
import { UserData } from '../../Models/user.model.js';

import '../../Styles/signUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            isVaild: true,
            error: "",
            newUser: new UserData('', '', '')
        }
        this.handleOnInput = this.handleOnInput.bind(this);
        this.handleOnSave = this.handleOnSave.bind(this);
    }


    handleOnInput(e) {
        this.setState({ newUser: { ...this.state.newUser, [e.target.id]: e.target.value } });
    };

    async handleOnSave() {
        const { userName, password, confirm_password} = this.state.newUser;
        const newUser = new UserData(userName, password, confirm_password);
        const res = newUser.isValidForSave();
        const checkUserData = await USER_API.findUser(this.state.newUser.userName);

        if (!res.isVaild) {
            this.setState({ isVaild: res.isVaild, error: res.error });
            if (checkUserData === null) {
                this.setState({ isVaild: res.isVaild, error: res.error });
                console.log(this.state.isVaild, this.state.error);
            }
        } else {
            USER_API.addUser(this.state.newUser);
            this.setState({ isVaild: true, error: '' });
            sessionStorage.setItem("auth", true);
            sessionStorage.setItem("user", JSON.stringify(this.state.newUser));
            window.location.href = "/";
        }
    }

    render() {
        return (
            
            <form className="form">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />

                <input
                    type="text"
                    id="userName"
                    className="form-control"
                    placeholder="Username"
                    onChange={this.handleOnInput}
                    value={this.state.newUser.userName}
                    required
                    autoFocus
                />
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.handleOnInput}
                    value={this.state.password}
                    required
                />
                <input
                    type="password"
                    id="confirm_password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={this.handleOnInput}
                    value={this.state.confirm_password}
                    required
                />

                <button
                    type="button"
                    className="btn btn-lg btn-primary btn-block signUp-submit__btn"
                    onClick={this.handleOnSave}
                >Sign Up</button>

                {!this.state.isVaild ?
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <i className="bi bi-exclamation-triangle-fill bi flex-shrink-0 me-2"></i>
                        <div>
                            {this.state.error}
                        </div>
                    </div>
                    : ''}

            </form>
        )
    }
}

export default SignUp;