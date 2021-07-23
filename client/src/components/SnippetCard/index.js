import React from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";

function SnippetCard(props) {
    const history = useHistory();
    
    return(
        <div className="snippet-card flexform rd-b">
            <h2 className="snippet-title">{props.title}</h2>
            <p>{props.language}</p>
            <p>{props.description}</p>
            <button to={"/snippet/" + props.id} onClick={()=> history.push("/snippet/" + props.id)} className="snippet-btn">START</button>
        </div>
    )
}

export default SnippetCard;