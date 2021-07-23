import React, { useEffect, useState, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import SnippetCard from "../components/SnippetCard";
import './collection.css'

function Collection() {
    const [snippets, setSnippets] = useState({});
    const {id} = useParams()
    useEffect(() => {
        loadSnippets();
        /*        fetch("/api/snippet/11")
        .then(res => console.log(res))*/
      }, []);

    function loadSnippets() {
        API.fetchCollectionSnippets(id)
          .then(res =>{
              setSnippets(res.data);
              console.log(res.data);
          })
          .catch(err => console.log(err));
      }

    return (
        <div className="collection-page">
            {/* <h1>Cool Collection</h1> */}
            <div className="collection-snippets">
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

            
        </div>
    );


}

export default Collection;