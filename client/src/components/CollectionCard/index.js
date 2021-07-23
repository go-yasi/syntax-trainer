import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import API from "../../utils/API";
import "./style.css";

function CollectionCard(props) {

    const history = useHistory();


    return(
        <div className="collection-card flexform rd-b">
            <h2 className="collection-title">{props.title}</h2>
            <p className="collection-length">{props.length} Snippets</p>
            <button to={"/collection/" + props.id} onClick={()=> history.push("/collection/" + props.id)} className="collection-btn ">START</button>
         </div>
    )
}

export default CollectionCard;