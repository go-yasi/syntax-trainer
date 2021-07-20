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
            <section className="signup-block">
                {/* <!-- Signup Form --> */}
                <form className="form signup-form" onSubmit={handleSubmit}>
                    {/* <!-- Username --> */}
                    <div className="form-group">
                        <label className="label" for="username-signup">create username:</label>
                        <input className="form-input" type="text" id="username-signup" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
                        </div>
                    {/* <!-- Password --> */}
                    <div className="form-group">
                        <label className="label" for="password-signup">create password:</label>
                        <input className="form-input" type="password" id="password-signup" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    {/* <!-- Bio --> */}
                    <div className="form-group">
                        <label className="label" for="bio-signup">tell us about yourself:</label>
                        <input className="form-input" type="text" id="bio-signup" onChange={e => setBio(e.target.value)}></input>
                    </div>
                    {/* <!-- Signup Button --> */}
                    <div className="form-group">
                        <button className="green-btn signup-button" type="submit">Sign Up</button>
                    </div>
                    <div className="form-group">
                        <a className="l-s-cta" href="/login">Need to log in instead?</a>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default SignupForm;