import React from "react";
import "./style.css";

function ProfileScoreCard(props) {
  return (
    <section>
        <div className="hs-scores flexform">
            <h6 className="hs-snippet">{props.snippet}</h6>
            <p className="hs-value">Score: {props.value}</p>
        </div>
    </section>
  );
}

export default ProfileScoreCard;