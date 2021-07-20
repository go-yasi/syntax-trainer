import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="" src="" alt=""></img>
      <span>
          <Link
          className={window.location === "https://github.com/go-yasi/syntax-trainer"}
          >
          GitHub Repo
          </Link>
      </span>
      <img className="" src="" alt=""></img>
    </footer>
  );
}

export default Footer;
