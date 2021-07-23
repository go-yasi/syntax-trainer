import React from "react";
import "./style.css";

function CollectionCard(props) {
    return(
        <div className="collection-card flexform rd-b">
            <h2 className="collection-title">{props.title}</h2>
            <p className="collection-length">{props.length} Snippets</p>
            <button className="collection-btn pink-btn">START</button>
         </div>
    )
}

export default CollectionCard;