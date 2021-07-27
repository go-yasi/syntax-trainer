import React from "react";
import "./style.css";
import treasure from "../../assets/treasure.gif";

function UserCard(props) {
    return (
    <div className="user-card">
      <h1 className="usercard-header">USER INFO</h1>
      {/* <img src="../../assets/avatars/joshua.png" className="usercard-avatar"></img> */}
      <div className="usercard-info">
        <p className="usercard-user">username: {props.username}</p>
        <p className="usercard-bio">bio: {props.bio}</p>
        <img className="treasure-gif" src={treasure} alt="sparkling treasure gif"></img>
      </div>
      
    </div>
  );
}

export default UserCard;

