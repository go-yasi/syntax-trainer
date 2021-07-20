import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
          <li>
              <Link
              className={window.location === "https://github.com/go-yasi/syntax-trainer"}
              >
              GitHub Repo
              </Link>
          </li>
      </ul>
    </footer>
  );
}

export default Footer;
