import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API.js"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HighScoreCard from "../HighScoreCard";

function Popup(props) {
    const [show, setShow] = useState(false);

    const [scores, setScores] = useState({});
    const {id} = useParams();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        loadScores();
        console.log(props.score);
    }, []);

    useEffect(() => {
        console.log(scores)
    }, [scores]);

    function loadScores(){
        API.fetchSnippetScores(props.snippet) 
            .then(res =>{
                setScores(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal 
        show={props.show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Dialog 
        
        >
        <Modal.Header>
            <Modal.Title><h1 className="modal-title">High Scores</h1></Modal.Title>
        </Modal.Header>
        {!scores.length ? 
        (
            <Modal.Body></Modal.Body>
        ):(
            <Modal.Body>
                {scores.length > 0 ? 
                (
                    <HighScoreCard
                    username={scores[0].username}
                    title={scores[0].title} 
                    value={scores[0].value}
                    />
                ):(<p></p>)}

                {scores.length > 1 ? 
                (
                    <HighScoreCard
                    username={scores[1].username}
                    title={scores[1].title} 
                    value={scores[1].value}
                    />
                ):(<p></p>)}

                {scores.length > 2 ? 
                (
                    <HighScoreCard
                    username={scores[2].username}
                    title={scores[2].title} 
                    value={scores[2].value}
                    />
                ):(<p></p>)}

                {scores.length > 3 ? 
                (
                    <HighScoreCard
                    username={scores[3].username}
                    title={scores[3].title} 
                    value={scores[3].value}
                    />
                ):(<p></p>)}


                {scores.length > 4 ? 
                (
                    <HighScoreCard
                    username={scores[4].username}
                    title={scores[4].title} 
                    value={scores[4].value}
                    />
                ):(<p></p>)}

                    <h3>Your Score</h3>
                    <HighScoreCard
                    username={user?(user.username):("guest")}
                    value={props.score.value}
                    />
            </Modal.Body>
        )}


        <Modal.Footer className="popup-footer">
            <Button className="red-btn" variant="secondary">Close</Button>
            <Button className="green-btn" variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
        </Modal>
    )
}

export default Popup;