import React from "react";
import { useHistory } from 'react-router-dom';
import "./style.css";

function CollectionCard(props) {
    const history = useHistory();

    return(
        <div className="collection-card flexform rd-b">
            <h2 className="collection-title">{props.title}</h2>
            <p className="collection-length">{props.length} Snippets</p>
            <button to={"/collection/" + props.id} onClick={()=> history.push("/collection/" + props.id)} className="collection-btn ">VIEW</button>
         </div>
    )
};

export default CollectionCard;