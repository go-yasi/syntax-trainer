const React = require('react')
//const ms = require('pretty-ms')
class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: props.length,
      isOn: false,
      start: 0,
      game: props.game,
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.started = 0;
  }
  componentDidMount(){
    this.startTimer();
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps);
    
    if (this.props !== nextProps && this.state.game) {
        this.setState({game: nextProps.game}, ()=>{
            if(!this.state.game){
                this.stopTimer();
            }
        } );
        
         //this.setState({game:false});
    }
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time,
      game: this.state.game,
    })
    console.log(this.state.game);
    this.timer = setInterval(() => 
        this.setState({
        time: this.state.time - 1
    }), 1000);
  }
  stopTimer() {
    this.setState({isOn: false})
    console.log(this.state.game);
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }
  game(){
      if(this.state.game ){ 
          this.started++;
          
      }else{
          
      }
  }

  render() {
    let start = (this.state.time == 0) ?
      <button onClick={this.startTimer} id="startBtn">start</button> :
      null
    let stop = (this.state.time == 0 || !this.state.isOn) ?
      null :
      <button onClick={this.stopTimer} id="stopBtn">stop</button>
    let resume = (this.state.time == 0 || this.state.isOn) ?
      null :
      <button onClick={this.startTimer} id="startBtn">resume</button>
    let reset = (this.state.time == 0 || this.state.isOn) ?
      null :
      <button onClick={this.resetTimer} id="resetBtn">reset</button>
    return(
      <div>
        <h3>timer: {this.state.time}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    )
  }
}
export default Timer;

///////////////////////////////////////////////////
// import { useEffect, useState } from 'react'

// const React = require('react')
// //const ms = require('pretty-ms')
// function Timer(props){
//     const [state, setState] = useState({
//         time: props.length,
//         isOn: false,
//         start: 0,
//         game: props.game,
//     });
//     useEffect(() => {
//         if(state.game){
//             startTimer();
//         }else{
//             stopTimer();
//         }
//       }, [state.game]);
//     // this.startTimer = this.startTimer.bind(this)
//     // this.stopTimer = this.stopTimer.bind(this)
//     // this.resetTimer = this.resetTimer.bind(this)
//   function startTimer() {
//     setState({
//       isOn: true,
//       time: this.state.time,
//       start: Date.now() - this.state.time,
//       game: props.game,
//     })
//     timer = setInterval(() => setState({
//       ...state,  
//       time: this.state.time - 1
//     }), 1000);
//   }
//   function stopTimer() {
//     setState({...state, isOn: false})
//     clearInterval(timer)
//   }
//   function resetTimer() {
//     this.setState({time: 0, isOn: false})
//   }

//   return(
//       <div>
//         <h3>time: {state.time}</h3>
//       </div>
//     )
// }
// export default Timer;