// YOUR SCORE CARD

import React from "react";
import "./style.css";

function YourScoreCard(props) {
  return (

        <div className="scores-list">
            <p className="single-score-value ss">{props.value}</p>
        </div>

  );
}

export default YourScoreCard;

