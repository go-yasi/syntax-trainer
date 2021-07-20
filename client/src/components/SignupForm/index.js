//import React from "react";
import React, { useState } from "react";

function SignupForm() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [bio, setBio] = useState();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("password is " + password);
        console.log("bio is " + bio);
    };
    

    return (
        <div>
            <h2>Signup Form</h2>
            <section class="signup-block">
                {/* <!-- Signup Form --> */}
                <form class="form signup-form" onSubmit={handleSubmit}>
                    {/* <!-- Username --> */}
                    <div class="form-group">
                        <label class="label" for="username-signup">create username:</label>
                        <input class="form-input" type="text" id="username-signup" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
                        </div>
                    {/* <!-- Password --> */}
                    <div class="form-group">
                        <label class="label" for="password-signup">create password:</label>
                        <input class="form-input" type="password" id="password-signup" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    {/* <!-- Bio --> */}
                    <div class="form-group">
                        <label class="label" for="bio-signup">tell us about yourself:</label>
                        <input class="form-input" type="text" id="bio-signup" onChange={e => setBio(e.target.value)}></input>
                    </div>
                    {/* <!-- Signup Button --> */}
                    <div class="form-group">
                        <button class="green-btn signup-button" type="submit">Sign Up</button>
                    </div>
                    <div class="form-group">
                        <a class="l-s-cta" href="/login">Need to log in instead?</a>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignupForm;