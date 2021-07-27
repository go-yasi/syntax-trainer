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
    const gotoSnippetForm = () =>{ history.push('/snippetform')};

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
        <div className="profile-page full-page">
            <h1 className="profile-welcome">Welcome to your profile, {profile.username}!</h1>
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
                    <h1 className="sc-header">HIGH SCORES</h1>
                    <div className="sc-info">
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
            </div>
            <div className="profile-page-usersnippets">
                <div className="user-snippets-header">
                    <h1 className="ursnip">YOUR SNIPPETS</h1>
                    <button className="blue-btn" onClick={gotoSnippetForm} id="create-snippet">Create Snippet</button>
                </div>
                <div className="users-snippets">
                {!profile.snippets ? (
                <h1 className="text-center">No Snippets to Display</h1>
              ) : (
                profile.snippets.map(snippet => {
                    return (
                      <SnippetCard
                        title={snippet.title}
                        language={snippet.language}
                        description={snippet.description}
                        key={snippet.id}
                        id={snippet.id}
                      />
                    );
                  })
              )}
                </div>
            
            </div>
        </div>
    );
}

export default Profile;