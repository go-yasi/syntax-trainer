import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API.js"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HighScoreCard from "../HighScoreCard";
import "./style.css";
import sparkle from "../../assets/sparkle.gif";

function Popup(props) {
    const [show, setShow] = useState(false);

    const [scores, setScores] = useState({});
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        loadScores();
        console.log(props.score);
    }, []);

    useEffect(() => {
        console.log(scores)
    }, [scores]);

    function loadScores() {
        API.fetchSnippetScores(props.snippet)
            .then(res => {
                setScores(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    function playAgain() {
        window.location.reload();
    }
    function nextGame() {
        API.fetchCollection(props.score.collection_id)
            .then(res => {
                console.log("Collection: ", res.data);
                console.log("Collection: ", res.data.snippets.length);
                for (var i = 0; i < res.data.snippets.length; i++) {
                    console.log(res.data.snippets[i].id);
                    console.log(props.score.collection_id);
                    if(res.data.snippets[i].id === props.score.snippet_id){
                        
                        if(i === res.data.snippets.length -1 ){
                            console.log("last");
                            window.location.replace("/");
                        }else{
                            console.log("next is " + res.data.snippets[i+1].id);
                            window.location.replace("/snippet/" + res.data.snippets[i+1].id)
                        }
                    }
                }
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
            className="rd-b"
            >
                {/* <Modal.Header> */}
                    {/* <Modal.Title><h1 className="modal-title">High Scores</h1></Modal.Title> */}
                {/* </Modal.Header> */}
                {!scores.length ?
                    (
                        <Modal.Body></Modal.Body>
                    ) : (
                        
                        <Modal.Body>
                            <div className="urscore">
                                <h3 className="u-score">Your Score: {props.score.value}</h3>
                                {/* <YourScoreCard
                                className="user-new-score"
                                value={props.score.value}
                                /> */}
                                <img className="sparkle-gif" src={sparkle} alt=""></img>
                            </div>

                            <div className="highscores">
                            <h3 className="your-score high-scores">HIGH SCORES</h3>
                            {scores.length > 0 ?
                                (
                                    <HighScoreCard
                                    id="1ST"
                                        username={scores[0].username}
                                        title={scores[0].title}
                                        value={scores[0].value}
                                    />
                                ) : (<p></p>)}

                            {scores.length > 1 ?
                                (
                                    <HighScoreCard
                                    id="2ND"
                                        username={scores[1].username}
                                        title={scores[1].title}
                                        value={scores[1].value}
                                    />
                                ) : (<p></p>)}

                            {scores.length > 2 ?
                                (
                                    <HighScoreCard
                                    id="3RD"
                                        username={scores[2].username}
                                        title={scores[2].title}
                                        value={scores[2].value}
                                    />
                                ) : (<p></p>)}

                            {scores.length > 3 ?
                                (
                                    <HighScoreCard
                                    id="4TH"
                                        username={scores[3].username}
                                        title={scores[3].title}
                                        value={scores[3].value}
                                    />
                                ) : (<p></p>)}


                            {scores.length > 4 ?
                                (
                                    <HighScoreCard
                                    id="5TH"
                                        username={scores[4].username}
                                        title={scores[4].title}
                                        value={scores[4].value}
                                    />
                                ) : (<p></p>)}
                            </div>
                            
                            
                        </Modal.Body>
                    )}

                <Modal.Footer className="popup-footer">
                    <Button className="pink-btn" variant="secondary" onClick={playAgain} >Play Again</Button>
                    <Button className="green-btn" variant="primary" onClick={nextGame}>Next Game</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default Popup;