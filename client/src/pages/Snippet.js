import React, { useEffect, useState, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import { CopyBlock, dracula, nord } from "react-code-blocks";
import Timer from "../components/Timer";



function Snippet() {
    const [snippet, setSnippet] = useState({});
    const [testSnippet, setTestSnippet] = useState("");
    const [theme, setTheme] = useState(0);
    const [game, setGame] = useState(true);
    const [started, setStarted] = useState(false);
    const [errors, setErrors] = useState(0);
    //let errors = 0;
    //  const [timer, setTimer] = useState({
    //      time:-1,
    //      on:true
    //  });
    const {id} = useParams()

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
        let score = Math.floor( timeLeft*100/timeTotal - errors);
        console.log(score);
        let sc = {
          "value": score,
          "snippet_id": snippet.id,
          "user_id": 5 
        };
      console.log(sc);
        API.saveScore(sc)
      .then(res =>{
          console.log(res)
      })
      .catch(err => console.log(err));
    }
    // scored(1, 10, 9);

    // var secondsLeft = timer.time;
    // function setTime() {
    //     // Sets interval in variable
    //     timerInterval = setInterval(function() {
    //     let gamestop = timer.on;
    //       //var gameState = game;
    //       secondsLeft--;
    //       console.log(secondsLeft);
    //       console.log(timer.on);
    //       console.log(gamestop);


    //       if(gamestop === true){
    //           //console.log(timer.on);
    //           //console.log("true");
    //           //clearInterval(timerInterval);
    //       } 
    //       if(gamestop === false){
    //         //console.log(timer.on);
    //         //console.log("false");
    //         clearInterval(timerInterval);
    //     } 
          
    //       if(secondsLeft < 1) {
    //           //setTimer({...timer, on:false});
    //         // Stops execution of action at set interval
    //           clearInterval(timerInterval);
    //         // Calls function to create and append image
    //           sendMessage();
    //       }
    //       setTimer({...timer, time:secondsLeft});
  
  
    //     }, 1000);
    //   }

    // function sendMessage() {
    //     console.log("times up");      
    // }


    return (
        <div>
            <h1>The Snippet!</h1>
            <h3>{snippet.title}</h3>
            {/* {timer < 0 ? (<h3>times up</h3>): (<h3>time: {timer.time}</h3>)} */}
                
            
            <CopyBlock
            text={snippet.code}
            theme={dracula}
            language={"javascript"}
            //showLineNumbers={true}
            />
             <textarea name="testSnippet" placeholder={"code here"} onChange={handleInputChange} onKeyDown={tab} id="textArea"></textarea>
            
            {theme === 1 ? 
                (
                    <CopyBlock
                        text={testSnippet}
                        theme={nord}
                        language={"javascript"}
                    />       
                ):
                (
                    <CopyBlock
                        text={testSnippet}
                        theme={dracula}
                        language={"javascript"}
                    />       
                )}

                {!started ? 
                (
                    <h3>timer:{snippet.code ? (snippet.code.length):(0)} </h3>
                ):
                (
                    <Timer length={snippet.code.length} game={game} errors={errors} scored={scored}/>
                )
                }
                   
                    {/* <Timer /> */}

        </div>
    );
}

export default Snippet;