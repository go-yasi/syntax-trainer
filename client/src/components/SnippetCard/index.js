import React from "react";

function SnippetCard(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.language}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default SnippetCard;