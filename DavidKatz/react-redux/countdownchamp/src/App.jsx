import React, { Component } from 'react';
import Clock from './Clock.jsx';
import {Form, FormControl, Button } from 'react-bootstrap';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'December 25, 2018',
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
        <Clock deadline={this.state.deadline} />
        <Form>
          <input 
            placeholder='new date' 
            onChange={e => this.setState({newDeadline: e.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </Form>
      </div>
    )
  }
}

export default App;