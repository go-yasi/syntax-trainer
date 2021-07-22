import React from "react";
import "./style.css";

function CollectionCard(props) {
    return(
        <div className="collection-card flexform rd-b">
            <h2 className="collection-title">{props.title}</h2>
            <p className="collection-length">{props.length} Snippets</p>
            <button className="collection-btn">Press to Start</button>
         </div>
    )
}

export default CollectionCard;