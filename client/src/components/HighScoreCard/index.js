// HIGH SCORE CARD

import React from "react";
import "./style.css";

function HighScoreCard(props) {
  return (

        <div className="scores-list">
            <p className="single-score-id ss">{props.id}</p>
            <p className="single-score-user ss">{props.username}</p>
            <p className="single-score-value ss">{props.value}</p>
        </div>

  );
}

export default HighScoreCard;

