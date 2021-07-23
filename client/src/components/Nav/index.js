import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import API from "../../utils/API"
import "./style.css";

function Nav() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [logged, setLogged] = useState(false);
  const [user, setFoundUser] = useState({});
  // let history = useHistory();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      setLogged(true)
      // setFoundUser (JSON.parse(loggedIn));
     
    }
  }, []);

  // API.logoutUser({
  //   username: username,
  //   password: password
  // })
  // .then(res =>{
  //   console.log(res)
  //   localStorage.setItem('user', JSON.stringify(res.data.user))
  //   history.push('/')
  // })
  // .catch(err => console.log(err));

  const handleLogout = () => {
        setUsername("");
        setPassword("");
        localStorage.clear();
      };

  
  

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
          to={"/"}

          className={window.location.pathname === "/profile/" ? "nav-link active" : "nav-link"}
          >
          Profile
          </Link>
          )}
          
        </div>
        <div className="nav-item nav-login">
          {logged ? (
            <Link
            to="/login"
            onClick={handleLogout}
            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
            Log out
            </Link>
            ) : (
            <Link
            to="/login"
            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
            Login
            </Link>
            )}
        </div>
        <div className="nav-item nav-logout">
          {/* Create Logout link */}
          {/* only visible if logged in */}
        </div>
      </div>
    </nav>
  );
 

};

export default Nav;
