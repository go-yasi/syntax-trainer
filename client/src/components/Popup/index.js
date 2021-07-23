import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
        API.fetchSnippetScores(id) 
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
            <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Modal body text goes here.</p>
            <HighScoreCard
            users={scores.username}
            snippet={scores.title} 
            value={scores.value}
            />
        </Modal.Body>

        <Modal.Footer className="popup-footer">
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal.Dialog>
    )
}

export default Popup;