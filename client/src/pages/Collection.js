import React, { useEffect, useState, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import SnippetCard from "../components/SnippetCard";
import './collection.css'

function Collection() {
    const [snippets, setSnippets] = useState({});
    const [collection, setCollection] = useState({});
    const {id} = useParams()
    useEffect(() => {
        loadSnippets();
        loadCollection();
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
      };

    function loadCollection() {
      API.fetchCollection(id) 
      .then( res => {
        setCollection(res.data);
        console.log("Collection: ", res.data);
      })
      .catch(err => console.log(err));
    }

    return (
        <div className="collection-page full-page">
            <h1 className="collection-title centered-text">{collection.title} SNIPPETS</h1>
            <div className="collection-snippets">
              {!snippets.length ? (
                <h1 className="text-center">No Collections to Display</h1>
              ) : (
                  snippets.map(snippet => {
                    return (
                      <SnippetCard
                      className="col-snippet-card"
                        title={snippet.title}
                        // language={snippet.language}
                        description={snippet.description}
                        key={snippet.id}
                        id={snippet.id}
                      />
                    );
                  })
              )}
            </div>
        </div>
    );


}

export default Collection;