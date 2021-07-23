import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API"
import "./style.css";

function LoginForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
        API.loginUser({
            username: username,
            password: password
        })
        .then(res =>{
            console.log(res)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            history.push('/profile/' + res.data.user.id)
        })
        .catch(err => console.log(err));
    };

    // const handleLogout = () => {
    //     setUsername("");
    //     setPassword("");
    //     localStorage.clear();
    //   };


    return (
        <div>
            <section className="login-block px-box rd-b-in">
                {/* <!-- Login Form --> */}
                <form className="form login-form flexform" onSubmit={handleSubmit}>
                    <h2 className="form-header">Login</h2>
                    {/* <!-- Username --> */}
                    <div className="form-group">
                        <label for="username-login">username</label>
                        <input className="form-input" type="text" id="username-login" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    {/* <!-- Password --> */}
                    <div className="form-group">
                        <label for="password-login">password</label>
                        <input className="form-input" type="password" id="password-login" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    {/* <!-- Login Button --> */}
                    <div className="form-group">
                        <button className="green-btn login-button" type="submit">Log In</button>
                    </div>
                    {/* <!-- Link to Signup Page --> */}
                    <div className="form-group">
                        <a className="l-s-cta" href="/signup">Need to sign up instead?</a>
                    </div>
                </form>
            </section>
        </div>          
    );
};

export default LoginForm;