import React from "react";

function SnippetCard(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.language}</p>
            {/* <p>description of snippet---description of snippet---description of snippet---description of snippet---description of snippet</p> */}
            <p>{props.code}</p>
        </div>
    )
}

export default SnippetCard;