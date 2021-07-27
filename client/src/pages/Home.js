import React, { useEffect, useState, Component } from "react";
import API from "../utils/API";
import CollectionCard from "../components/CollectionCard";
import "./home.css";
import Typewriter from 'typewriter-effect';

function Home() {
    const [collections, setCollections] = useState({});

    useEffect(() => {
        loadCollections();
        /*        fetch("/api/snippet/11")
        .then(res => console.log(res))*/
      }, []);

    function loadCollections() {
        API.fetchCollections()
          .then(res =>{
              setCollections(res.data);
              console.log(res.data);
          })
          .catch(err => console.log(err));
      }

      //console.log(collections);
      //console.log(collections[0].title);
      //console.log(collections[0].snippets.length);

    return (
        <div className="homepage full-page">
            <div className="home-intro">
              <h1 className="intro-header">Welcome to Syntax Trainer!</h1>
              <Typewriter
              options={{
                delay: 75
              }}
              className="intro-paragraph"
                onInit={(typewriter) => {
                  typewriter.typeString('An interactive web application that helps you practice and refine your coding skills by typing commonly used code snippets.')
                    .start();
                }}
              />
            </div>
            <p className="collec-intro">Choose the language you would like to practice:</p>
            <div className="home-collections">
              
              {!collections.length ? (
                <h1 className="text-center">No Collections to Display</h1>
              ) : (
                  collections.map(collection => {
                    return (
                      <CollectionCard
                      className="collection-card"
                      length={collection.snippets.length}
                      title={collection.title}
                      id={collection.id}
                      key={collection.id}
                      />
                    );
                  })
              )}
            </div>

            

        </div>

    );
}

export default Home;