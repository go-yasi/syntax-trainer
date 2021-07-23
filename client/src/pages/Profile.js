import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ProfileScoreCard from "../components/ProfileScoreCard";
import UserCard from "../components/UserCard";
import SnippetCard from "../components/SnippetCard";
import API from "../utils/API"


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
        <div>
            <h1>Cool Profile</h1>
                {profile.username ? (
                    <div>
                        <UserCard username={profile.username} bio={profile.bio} avatar={profile.avatar}/>
                    </div>
                ):(
                    <div>
                        Loading Bios
                    </div>
                )}
                {score.length > 0 ? (
                    <div>
                        <ProfileScoreCard snippet={score[0].title} value={score[0].value}/>
                    </div>
                ):(
                    <div>
                        Loading Score Card
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
              
                {profile.snippets ? (
                    <div> 
                        <SnippetCard title={profile.snippets[0].title} language={profile.snippets[0].language} />
                        {/* need mapping */}
                    </div>
                ):(
                    <div>
                        Loading Snippets
                    </div>
                )}
        </div>
    );
}

export default Profile;