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
            <section class="login-block">
                {/* <!-- Login Form --> */}
                <form class="form login-form" onSubmit={handleSubmit}>
                    <div class="form-group">
                        {/* <!-- Username --> */}
                        <label for="username-login">username</label>
                        <input class="form-input" type="text" id="username-login" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div class="form-group">
                        {/* <!-- Password --> */}
                        <label for="password-login">password</label>
                        <input class="form-input" type="password" id="password-login" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div class="form-group">
                        {/* <!-- Login Button --> */}
                        <button class="green-btn login-button" type="submit">Log In</button>
                    </div>
                    <div class="form-group">
                        <a class="l-s-cta" href="/signup">Need to sign up instead?</a>
                    </div>
                </form>
            </section>
        </div>          
    );
};

export default LoginForm;