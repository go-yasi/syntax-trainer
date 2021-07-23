import React from "react";
// import "./style.css";

function UserCard(props) {
    return (
    <div>
      <h1>USER INFO</h1>
      <h4>{props.avatar}</h4>
      <h4>username: {props.username}</h4>
      <h4>bio: {props.bio}</h4>
    </div>
  );
}

export default UserCard;

