import React from "react";

function SignupForm() {
    return (
        <div>
            <h2>Signup Form</h2>
            <section class="signup-block">
                {/* <!-- Signup Form --> */}
                <form class="form signup-form">
                    {/* <!-- Username --> */}
                    <div class="form-group">
                        <label class="label" for="username-signup">create username:</label>
                        <input class="form-input" type="text" id="username-signup" placeholder="username"></input>
                        </div>
                    {/* <!-- Password --> */}
                    <div class="form-group">
                        <label class="label" for="password-signup">create password:</label>
                        <input class="form-input" type="password" id="password-signup" placeholder="password"></input>
                    </div>
                    {/* <!-- Bio --> */}
                    <div class="form-group">
                        <label class="label" for="bio-signup">tell us about yourself:</label>
                        <input class="form-input" type="text" id="bio-signup"></input>
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