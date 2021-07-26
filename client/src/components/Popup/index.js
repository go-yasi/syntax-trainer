import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API.js"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HighScoreCard from "../HighScoreCard";

function Popup() {
    const [show, setShow] = useState(false);

    const [scores, setScores] = useState({});
    const {id} = useParams();

    useEffect(() => {
        loadScores();
    }, []);

    useEffect(() => {
        console.log(scores)
    }, [scores]);

    function loadScores(){
        API.fetchSnippetScores(1) 
            .then(res =>{
                setScores(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    

    return (
        <Modal.Dialog
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header>
            <Modal.Title>High Scores</Modal.Title>
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
                
            </Modal.Body>
        )}
        

        <Modal.Footer className="popup-footer">
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
    )
}

export default Popup;