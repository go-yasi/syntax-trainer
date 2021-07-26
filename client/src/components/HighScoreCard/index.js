import React from "react";
// import "./style.css";
// import  from "";

function HighScoreCard(props) {
  return (
    <section>
        <div className="heading">
        </div>
        <div className="scores">
            <h3 className="">{props.username}-{props.title}-{props.value}</h3>
        </div>
    </section>
  );
}

export default HighScoreCard;