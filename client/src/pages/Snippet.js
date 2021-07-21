import React, { useEffect, useState, Component } from "react";
import API from "../utils/API"



function Snippet() {
    const [snippet, setSnippet] = useState({});

    useEffect(() => {
        loadSnippets();
        /*        fetch("/api/snippet/11")
        .then(res => console.log(res))*/
      }, []);

    function loadSnippets() {
        API.fetchSnippet(10)
          .then(res =>{
              setSnippet(res.data);
              console.log(res.data);
          })
          .catch(err => console.log(err));
      }
    return (
        <div>
            <h1>The Snippet!</h1>
            <h3>{snippet.title}</h3>
            <code>{snippet.code}</code>
        </div>
    );
}

export default Snippet;