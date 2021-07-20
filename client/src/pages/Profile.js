import React, { Component } from "react";
import ProfileScoreCard from "../components/ProfileScoreCard";
import UserCard from "../components/UserCard";
import SnippetCard from "../components/SnippetCard";

class Profile extends Component {
    render() {
        const snip = {
            title: "snip snip"
        }
        const snipScore = {
            value: 3
        }
        return (
            <div>
                <h1>Cool Profile</h1>
                <UserCard />
                <ProfileScoreCard snippet={snip} scores={snipScore}/>
                <SnippetCard />
                <SnippetCard />
            </div>
        );
    }
}

export default Profile;