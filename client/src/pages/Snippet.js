import React, { useEffect, useState, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import { CopyBlock, dracula, nord, far, googlecode, purebasic } from "react-code-blocks";
import Timer from "../components/Timer";
import Popup from "../components/Popup";
import "./snippet.css";
import timer from "../assets/timer.gif";


function Snippet() {
    const [snippet, setSnippet] = useState({});
    const [testSnippet, setTestSnippet] = useState("");
    const [theme, setTheme] = useState(0);
    const [game, setGame] = useState(true);
    const [displayScores, setDisplayScores] = useState(false);
    const [currentScore, setCurrentScore] = useState({});
    const [started, setStarted] = useState(false);
    const [errors, setErrors] = useState(0);
    //let errors = 0;
    //  const [timer, setTimer] = useState({
    //      time:-1,
    //      on:true
    //  });
    const {id} = useParams()
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        loadSnippets();
        document.getElementById('textArea').addEventListener('keydown', function(e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 9) {
                e.preventDefault();
        
                const TAB_SIZE = 6;
                document.execCommand('insertText', false, ' '.repeat(6));
            }
          });
      }, []);

      var timerInterval;
      useEffect(() => {
        if(testSnippet){
            //console.log(testSnippet);
            checkCode(testSnippet);
            if(snippet.code === testSnippet){
                clearInterval(timerInterval);
                //setTimer({...timer, on:false});
                
                console.log("end me");
                return;
              }
            if(!started){
                setStarted(true);
                // setTimer({...timer, on:true});
                //setGame(true);
                //getElementById("startBtn").onClick();
                //Timer.startTimer();
                //  setTime();
             }
        }
        
      }, [testSnippet]);


    function loadSnippets() {
        API.fetchSnippet(id)
          .then(res =>{
              setSnippet(res.data);
            //   setTimer({...timer, time: res.data.code.length-151 });
              console.log(res.data);
          })
          .catch(err => console.log(err));
      }

      function handleInputChange(event) {
        const { name, value } = event.target;
        setTestSnippet(value);
      };

      function checkCode(value){
          if(snippet.code === testSnippet){
            // setTimer({...timer, on:false});
            setGame(false);
            console.log("doneso");
            //console.log(React.findDOMNode(this.refs.time).value);
          }
        //setTestSnippet({...testSnippet, code:value});
          if(snippet.code.indexOf(testSnippet)){
            console.log("errrrrr");
            setTheme(1);
            setErrors(errors+1);
          }else{
            setTheme(0);
          }
      }

       function tab(event){
        if(event.key === 'Tab'){
            event.preventDefault();
            console.log("tab"); 
        }     
    }
    function scored(errors , timeTotal , timeLeft){
        let score = Math.floor( timeLeft*1000/timeTotal - errors);
        console.log(score);
        let userid;
        if(user){
          userid =user.id;
        }else{
          userid=1;
        }
        let sc = {
          "value": score,
          "snippet_title": snippet.title,
          "snippet_id": snippet.id,
          "user_id": userid,
          "collection_id":snippet.collection_id
        };
        setCurrentScore(sc);
      console.log(sc);
        API.saveScore(sc)
      .then(res =>{
          console.log(res)
          setDisplayScores(true);
      })
      .catch(err => console.log(err));
    }


  return (
    <div className="snippet-page full-page">

      {/* <h1 className="snippet-name">{snippet.title}</h1> */}
      {/* <p className="snippet-name">{snippet.description}</p> */}

      <div className="instructions rd-b">
      <h1 className="instructions-title">Instructions: </h1>
      <p className="snip-instructions">Click on the first code block and begin typing to start the timer! The block below will display the text you are typing. As you type, be sure to keep your eye on the colors ??? they will change if you make any errors!</p>
      </div>

      <div className="countdown">
      {/* <img className="hourglass-gif" src={timer} alt="hourglass gif"></img> */}
        <div className="timer">
        {!started ? 
            (
              <h3>TIMER:{snippet.code ? (snippet.code.length - snippet.code.length%5 + 5):(0)} </h3>
            ):
            (
              <Timer 
              length={snippet.code.length - snippet.code.length%5 + 5} 
              game={game} 
              errors={errors} 
              scored={scored}/>
            )
          }
        </div>
      </div>
     

      <div className="game-block rd-b">
        <CopyBlock
          className="snippet-code"
          text={snippet.code}
          theme={dracula}
          language={"javascript"}
        />

        <textarea 
          className="snippet-text"
          name="testSnippet" 
          onChange={handleInputChange} 
          onKeyDown={tab} 
          id="textArea">
        </textarea>
      </div>

      <div className="result-block rd-b">
        {theme === 1 ? 
          (
            <CopyBlock
            className="snippet-result"
            text={testSnippet}
            theme={far}
            language={"javascript"}
            />       
          ):
          (
            <CopyBlock
            text={testSnippet}
            theme={dracula}
            language={"javascript"}
            />       
          )
        }
        
        {displayScores ? (
          <Popup 
          snippet={snippet.id}
          show={true}
          score={currentScore}
          />
        ):
        (
          <div></div>
        )}
      </div>
      
    </div>
  );
}

export default Snippet;