import React from "react";
import "./style.css";
// import "../../assets/avatars"

function UserCard(props) {
    return (
    <div className="flexform user-card">
      <h1 className="usercard-header">USER INFO</h1>
      {/* <img src="../../assets/avatars/joshua.png" className="usercard-avatar"></img> */}
      <p className="usercard-user">username: {props.username}</p>
      <p className="usercard-bio">bio: {props.bio}</p>
    </div>
  );
}

export default UserCard;

