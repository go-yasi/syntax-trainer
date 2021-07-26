import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ProfileScoreCard from "../components/ProfileScoreCard";
import UserCard from "../components/UserCard";
import SnippetCard from "../components/SnippetCard";
import API from "../utils/API";
import "./profile.css";

function Profile() {
    const [profile, setProfile] = useState({});
    const [score, setScore] = useState({});
    const {id} = useParams();
    let history = useHistory();

    useEffect(() => {
        loadProfile();
        loadScores();
       
    }, []);

    useEffect(() => {
        console.log(profile)
    }, [profile]);
    useEffect(() => {
        console.log(score)
        history.push('/profile/' + id)
    }, [score]);

    function loadProfile(){
        API.fetchUser(id) 
            .then(res =>{
                setProfile(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    function loadScores(){
        API.fetchUserScores(id) 
            .then(res =>{
                setScore(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    
    return (
        <div className="profile-page">
            <h1>Welcome to your profile, {profile.username}!</h1>
            <div className="profile-flex">
                <div className="profile-page-usercard">
                    {profile.username ? (
                        <div>
                            <UserCard username={profile.username} bio={profile.bio} avatar={profile.avatar}/>
                        </div>
                    ):(
                        <div>
                            Loading bio...
                        </div>
                    )}
                </div>
                <div className="profile-page-scorecard">
                    {score.length > 0 ? (
                        <div>
                            <ProfileScoreCard 
                            snippet={score[0].title} 
                            value={score[0].value}
                            />
                        </div>
                    ):(
                        <div>
                            Loading top scores...
                        </div>
                    )}
                    {score.length > 1 ? (
                        <div>
                            <ProfileScoreCard snippet={score[1].title} value={score[1].value}/>
                        </div>
                    ):(
                        <div>
                        </div>
                    )}
                    {score.length > 2 ? (
                        <div>
                            <ProfileScoreCard snippet={score[2].title} value={score[2].value}/>
                        </div>
                    ):(
                        <div></div>
                    )}
                </div>
            </div>
            <div className="profile-page-usersnippets">
                <h3>YOUR SNIPPETS</h3>
                {profile.snippets ? (
                    <div> 
                        <SnippetCard 
                        title={profile.snippets[0].title} 
                        language={profile.snippets[0].language} 
                        key={profile.snippets.id}
                        id={profile.snippets.id}
                        />
                        {/* need mapping */}
                    </div>
                ):(
                    <div>
                        Loading your snippets...
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;