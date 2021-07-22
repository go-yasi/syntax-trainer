import React from "react";
import { Link } from "react-router-dom";
import star from "../../assets/star.gif";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="star-gif" src={star} alt=""></img>
      <span className="flexform">
        <p className="footer-text">Developed by:</p>
        <p className="footer-text ft2">Joshua, Tai, Tom, and Yasi</p>
        <Link
        className="github-link"
        to={{ pathname: "https://github.com/go-yasi/syntax-trainer" }} 
        target="_blank" 
        >
        See the GitHub Repo
        </Link>
      </span>
      <img className="star-gif" src={star} alt=""></img>
    </footer>
  );
}

export default Footer;
