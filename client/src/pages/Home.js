import React, { useEffect, useState, Component } from "react";
import API from "../utils/API"
import CollectionCard from "../components/CollectionCard";
import "./home.css";

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
        <div className="homepage">
            {/* <h1>Hello World! You're Home</h1> */}
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
                      />
                    );
                  })
              )}
              <CollectionCard
              className="collection-card"
                  length={3}
                  title={"LoopdiLoop"}
              />
            </div>

            

        </div>

    );
}

export default Home;