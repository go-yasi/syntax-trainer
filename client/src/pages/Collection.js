import React, { Component } from "react";
import SnippetCard from "../components/SnippetCard";

class Collection extends Component {
    render() {
        
        return (
            <div>
                <h1>Cool Collection</h1>
                <SnippetCard />
                <SnippetCard />
                <SnippetCard />
                <SnippetCard />
            </div>
        );
        
    }
}

export default Collection;