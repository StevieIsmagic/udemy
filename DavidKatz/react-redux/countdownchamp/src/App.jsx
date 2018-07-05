import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline() {
    console.log('state',this.state)
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <div className="days">14 days</div>
          <div className="hours">30 hours</div>
          <div className="minutes">15 minutes</div>
          <div className="seconds">20 seconds</div>
        </div>
        <div>
          <input 
            placeholder='new date' 
            onChange={e => this.setState({newDeadline: e.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;