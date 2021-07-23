import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  const [logged, setLogged] = useState(false);
  const [user, setFoundUser] = useState({});
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      setLogged(true)
      setFoundUser (JSON.parse(loggedIn));
     
    }
  }, []);

  

  
  
  return (
    <nav className="nav">
      <Link className="nav-logo" to="/">
        Syntax Trainer
      </Link>
      <div className="nav-list">
        <div className="nav-item nav-profile">
          {logged ? (
            <Link
            to={"/profile/" + user.id}
            className={window.location.pathname === "/profile/" ? "nav-link active" : "nav-link"}
            >
            Profile
            </Link>
          ) : (
            <Link
          to={"/profile"}
          className={window.location.pathname === "/profile/" ? "nav-link active" : "nav-link"}
          >
          Profile
          </Link>
          )}
          
        </div>
        <div className="nav-item nav-login">
          <Link
          to="/login"
          className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
          >
          Login
          </Link>
        </div>
        <div className="nav-item nav-signup">
          <Link
          to="/signup"
          className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
          >
          Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
 

};

export default Nav;
