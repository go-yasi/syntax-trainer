import React from "react";
import { Link } from "react-router-dom";
import star from "../../assets/star.gif";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">

      <span className="info flexform rc-b">
        <p className="footer-text">Developed by:</p>
        <p className="footer-text ft2">Joshua, Tai, Tom, and Yasi</p>
        <div className="glb">
          <img className="star-gif" src={star} alt=""></img>
          <Link
          className="github-link"
          to={{ pathname: "https://github.com/go-yasi/syntax-trainer" }} 
          target="_blank" 
          >
          See the GitHub Repo
          </Link>
          <img className="star-gif" src={star} alt=""></img>
        </div>
        
      </span>
      
    </footer>
  );
}

export default Footer;
