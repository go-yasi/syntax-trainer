import React, { Component } from "react";
import SignupForm from "../components/SignupForm";
import "./signup.css"

class Signup extends Component {
    render() {
        return (
            <div className="signup-page full-page">
                <SignupForm />
            </div>
        )
    }
}

export default Signup;