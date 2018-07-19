import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          Stevie's Reminder App
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input 
              className="form-control"
              placeholder="I have to..."
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
          >
            Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

export default App;