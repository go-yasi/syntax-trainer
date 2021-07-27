import React from "react";
import "./style.css";

function UserCard(props) {
    return (
    <div className="flexform user-card">
      <h1 className="usercard-header">USER INFO</h1>
      <p className="usercard-user">username: {props.username}</p>
      <p className="usercard-bio">bio: {props.bio}</p>
    </div>
  );
}

export default UserCard;

