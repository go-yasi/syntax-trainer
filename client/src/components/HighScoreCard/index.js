// HIGH SCORE CARD

import React from "react";
import "./style.css";
// import  from "";

function HighScoreCard(props) {
  return (

        <div className="scores-list">
            <p className="single-score">{props.username}: {props.value}</p>
        </div>

  );
}

export default HighScoreCard;

