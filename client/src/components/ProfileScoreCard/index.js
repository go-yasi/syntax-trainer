import React from "react";
// import "./style.css";
// import  from "";

function ProfileScoreCard(props) {
  return (
    <section>
        <div className="heading">
            <h1>Your High Scores</h1>
        </div>
        <div className="scores">
            <h3 className="">{props.snippet.title}-{props.scores.value}</h3>
            <h3 className="">{props.snippet.title}-{props.scores.value}</h3>
            <h3 className="">{props.snippet.title}-{props.scores.value}</h3>
        </div>
    </section>
  );
}

export default ProfileScoreCard;