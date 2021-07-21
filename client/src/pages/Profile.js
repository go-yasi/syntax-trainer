import React, { useState, useEffect } from "react";
import ProfileScoreCard from "../components/ProfileScoreCard";
import UserCard from "../components/UserCard";
import SnippetCard from "../components/SnippetCard";
import API from "../utils/API"

function Profile() {
    const [profile, setProfile] = useState({
        score: [],
        users: {}
    });

    useEffect(() => {
        loadAll();
    }, []);

    useEffect(() => {
        console.log(profile)
    }, [profile]);

    function loadProfile(id){
        API.fetchUser(1)
            .then(res =>{
                setProfile({...profile, users:res.data});
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    function loadScores(id){
        API.fetchUserScores(1)
            .then(res =>{
                setProfile({...profile, score:res.data});
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    async function loadAll(){
        const load = await loadProfile();
        const load2 = await loadScores();
        // console.log(load);
    }
    
    return (
        <div>
            <h1>Cool Profile</h1>
                {profile.users ? (
                    <div>
                        <UserCard username={profile.users.username} bio={profile.users.bio} avatar={profile.users.avatar}/>
                    </div>
                ):(
                    <div>
                        Loading Bios
                    </div>
                )}
                {profile.score.length ? (
                    <div>
                        <ProfileScoreCard snippet={profile.score[0].snippet_id} value={profile.score[0].value}/>
                        <ProfileScoreCard snippet={profile.score[1].snippet_id} value={profile.score[1].value}/>
                    </div>
                ):(
                    <div>
                        Loading Score Card
                    </div>
                )}
            {/* <ProfileScoreCard snippet={profile} scores={profile}/> */}
            {/* <SnippetCard title={profile.snippets[0].title} language={profile.snippets[0].language} code={profile.snippets[0].code}/>
            <SnippetCard title={profile.snippets[1].title} language={profile.snippets[1].language} code={profile.snippets[1].code}/> */}
        </div>
    );
}

export default Profile;