import session from "express-session";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

function SnippetForm() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [code, setCode] = useState();
    const [language, setLanguage] = useState('html');
    let history = useHistory();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title)
        console.log(description)
        console.log(code)
        console.log(language)
        console.log(user)

        API.createSnippet({
            title: title,
            description: description,
            code: code,
            language: language,
            user_id: user.id,
            collection_id: 4
        })
        .then(res =>{
            console.log(res)
        history.push("/profile/" + user.id)    
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <section className="login-block px-box rd-b-in">
                {/* <!-- Snippet Form --> */}
                <form className="login-fm flexform" onSubmit={handleSubmit}>
                    <h2 className="fm-header">Add Snippet</h2>
                    {/* <!-- Title --> */}
                    <div className="fm-group">
                        <label className="fm-label" for="title"></label>
                        <input className="fm-input" type="text" id="title" placeholder="title" onChange={e => setTitle(e.target.value)}></input>
                    </div>
                    {/* <!-- Description --> */}
                    <div className="fm-group">
                        <label className="fm-label" for="description"></label>
                        <input className="fm-input" type="text" id="description" placeholder="description" onChange={e => setDescription(e.target.value)}></input>
                    </div>
                    {/* <!-- Code --> */}
                    <div className="fm-group">
                        <label className="fm-label" for="description"></label>
                        <textarea className="fm-input" type="text" id="code" placeholder="code" onChange={e => setCode(e.target.value)}></textarea>
                    </div>
                    {/* <!-- Language --> */}
                    <div className="fm-group">
                        <label className="fm-label" for="description"></label>
                        <select className="fm-input" type="text" id="language" onChange={e => setLanguage(e.target.value)}>
                            <option value="html">HTML</option>
                            <option value="javascript">JAVASCRIPT</option>
                            <option value="css">CSS</option>

                        </select>
                    </div>
                    {/* <!-- Submit Button --> */}
                    <div className="fm-group">
                        <button className="blue-btn submit-button" type="submit">SUBMIT</button>
                    </div>
                    
                </form>
            </section>
        </div>          
    );
};

export default SnippetForm;