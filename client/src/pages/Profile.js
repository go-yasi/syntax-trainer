import React, { Component } from "react";
import ProfileScoreCard from "../components/ProfileScoreCard";
import UserCard from "../components/UserCard";

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Cool Profile</h1>
                <UserCard />
                <ProfileScoreCard />
            </div>
        );
    }
}

export default Profile;