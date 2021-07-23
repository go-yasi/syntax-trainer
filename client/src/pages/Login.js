import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import './login.css'

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <LoginForm /> 
            </div>       
        );
    }
}

export default Login;