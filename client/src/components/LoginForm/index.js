//import React from "react";
import React, { useState } from "react";

function LoginForm() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
    };

    return (
        <div>
            <h2>Login Form</h2>
            <section className="login-block">
                {/* <!-- Login Form --> */}
                <form className="form login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <!-- Username --> */}
                        <label for="username-login">username</label>
                        <input className="form-input" type="text" id="username-login" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        {/* <!-- Password --> */}
                        <label for="password-login">password</label>
                        <input className="form-input" type="password" id="password-login" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        {/* <!-- Login Button --> */}
                        <button className="green-btn login-button" type="submit">Log In</button>
                    </div>
                    <div className="form-group">
                        <a className="l-s-cta" href="/signup">Need to sign up instead?</a>
                    </div>
                </form>
            </section>
        </div>          
    );
};

export default LoginForm;