import React, { useEffect, useState, Component } from "react";
import API from "../utils/API";
import { CopyBlock, dracula, nord } from "react-code-blocks";



function Snippet() {
    const [snippet, setSnippet] = useState({});
    const [testSnippet, setTestSnippet] = useState("aaa");
    useEffect(() => {
        loadSnippets();
        /*        fetch("/api/snippet/11")
        .then(res => console.log(res))*/
      }, []);

    function loadSnippets() {
        API.fetchSnippet(1)
          .then(res =>{
              setSnippet(res.data);
              console.log(res.data);
          })
          .catch(err => console.log(err));
      }

      function handleInputChange(event) {
        const { name, value } = event.target;
        setTestSnippet(value)
      };
      
    return (
        <div>
            <h1>The Snippet!</h1>
            <h3>{snippet.title}</h3>
            
            <CopyBlock
            text={snippet.code}
            theme={dracula}
            language={"javascript"}
            />
            <textarea name="testSnippet" placeholder={"hello"} onChange={handleInputChange}></textarea>
            <CopyBlock
            text={testSnippet}
            theme={nord}
            language={"javascript"}
            />

        </div>
    );
}

export default Snippet;