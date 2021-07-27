//import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API"
import "./style.css";

function SignupForm() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [bio, setBio] = useState();
    let history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
        console.log("bio is " + bio);
        API.createUser({
            username: username,
            password: password
        })
        .then(res =>{
            console.log(res)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            history.push('/')
        })
        .catch(err => console.log(err));
    };
    

    return (
        <div>
            
            <section className="signup-block px-box rd-b-in">
                {/* <!-- Signup Form --> */}
                <form className="signup-form flexform" onSubmit={handleSubmit}>
                    <h2 className="fm-header">SIGN UP</h2>
                    {/* <!-- Username --> */}
                    <div className="fm-group">
                        <label className="fm-label" for="username-signup"></label>
                        <input className="fm-input" type="text" id="username-signup" placeholder="create username" onChange={e => setUsername(e.target.value)}></input>
                        </div>
                    {/* <!-- Password --> */}
                    <div className="fm-group">
                        <label className="fm-label" for="password-signup"></label>
                        <input className="fm-input" type="password" id="password-signup" placeholder="create password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    {/* <!-- Bio --> */}
                    <div className="fm-group">
                        <label className="fm-label" for="bio-signup"></label>
                        <input className="fm-input" type="text" id="bio-signup" placeholder="add bio" onChange={e => setBio(e.target.value)}></input>
                    </div>
                    {/* <!-- Signup Button --> */}
                    <div className="fm-group">
                        <button className="green-btn signup-button" type="submit">SIGN UP</button>
                    </div>
                    <div className="fm-group">
                        <a className="l-s-cta" href="/login">Need to log in instead?</a>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignupForm;