import React, { useEffect, useState, Component } from "react";
import API from "../utils/API";
import SnippetCard from "../components/SnippetCard";

function Collection() {
    const [snippets, setSnippets] = useState({});

    useEffect(() => {
        loadSnippets();
        /*        fetch("/api/snippet/11")
        .then(res => console.log(res))*/
      }, []);

    function loadSnippets() {
        API.fetchCollectionSnippets(3)
          .then(res =>{
              setSnippets(res.data);
              console.log(res.data);
          })
          .catch(err => console.log(err));
      }

    return (
        <div>
            <h1>Cool Collection</h1>

            {!snippets.length ? (
              <h1 className="text-center">No Collections to Display</h1>
            ) : (
                snippets.map(snippet => {
                  return (
                    <SnippetCard
                      title={snippet.title}
                      language={snippet.language}
                      description={snippet.description}
                    />
                  );
                })
            )}
            
        </div>
    );


}

export default Collection;