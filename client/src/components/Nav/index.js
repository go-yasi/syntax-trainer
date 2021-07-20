import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-logo" to="/">
        Syntax Trainer
      </Link>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
            to="/profile"
            className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
            Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/login"
            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
            Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
