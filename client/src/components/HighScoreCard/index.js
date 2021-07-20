import React from "react";
import "./style.css";
// import  from "";

function HighScoreCard(props) {
  return (
    <section>
        <div className="heading">
            <h1>High Scores</h1>
        </div>
        <div className="scores">
            <h3 className="">{props.user.username}-{props.snippet.title}-{Props.scores.value}</h3>
            <h3 className="">{props.user.username}-{props.snippet.title}-{Props.scores.value}</h3>
            <h3 className="">{props.user.username}-{props.snippet.title}-{Props.scores.value}</h3>
            <h3 className="">{props.user.username}-{props.snippet.title}-{Props.scores.value}</h3>
            <h3 className="">{props.user.username}-{props.snippet.title}-{Props.scores.value}</h3>
        </div>
    </section>
  );
}

export default HighScoreCard;