import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'December 25, 2017'
    }
  }

  changeDeadline() {
    this.setState({
      deadline: 'November 20, 2017'
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
          <input placeholder='new date' />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;