import React from 'react';
import './timer.css'



export default class Timer extends React.Component {

   

    constructor (props) {
      super(props)
      this.state = {count:10}
    }
   
    tick () {
      this.setState({count: (this.state.count - 1)})
      if(this.state.count=== -1){alert("New Game?");
      this.setState({count:10}) };
      
    }
    startTimer () {
      if(this.state.count<=0){ this.stopTimer()}
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    render () {
      return (
        <div className='timer'>
          <h1>You have {this.state.count} seconds left!</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start Game</button>
          </div>
        </div>
      )
    }
  }
  
 