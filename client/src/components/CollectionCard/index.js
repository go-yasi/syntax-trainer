import React from "react";

function CollectionCard(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.length}</p>
         </div>
    )
}

export default CollectionCard;