import React from "react";
// import "./style.css";
// import  from "";

function ProfileScoreCard(props) {
  return (
    <section>
        <div className="heading">
            <h1>HIGH SCORES</h1>
        </div>
        <div className="scores">
            <h3 className="">{props.snippet}</h3>
            <p>Score: {props.value}</p>
        </div>
    </section>
  );
}

export default ProfileScoreCard;