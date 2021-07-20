import React, { Component } from "react";
import CollectionCard from "../components/CollectionCard";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello World! You're Home</h1>
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
                <CollectionCard />
            </div>
            
        );
    }
}

export default Home;