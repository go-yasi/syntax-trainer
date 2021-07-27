import React from "react";
import "./style.css";

function ProfileScoreCard(props) {
  return (
    <section>
        <div className="hs-scores flexform">
            <h3 className="hs-snippet">{props.snippet}</h3>
            <p className="hs-value">Score: {props.value}</p>
        </div>
    </section>
  );
}

export default ProfileScoreCard;