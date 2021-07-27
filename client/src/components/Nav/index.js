import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import API from "../../utils/API"
import logo from "../../assets/syntax-trainer-logo.png";
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
      setLogged(true);
      setUsername("");
        setPassword("");
    }
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      setFoundUser (JSON.parse(loggedIn));
    }
   }, [logged]);

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
    setLogged(false);
        setUsername("");
        setPassword("");
        localStorage.clear();
      };

  
  

  return (
    <nav className="nav">
      <Link className="nav-logo" to="/">
      <img className="syntax-trainer-logo" src={logo} alt="colorful syntax trainer logo"></img>
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
          to={"/signup"}
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
            Logout
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
      </div>
    </nav>
  );
 

};

export default Nav;
