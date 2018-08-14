import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Stevie's Music Master</div>
        <div>
          <input placeholder="search an artist..."/>
          <button>Button</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
          <div className="Gallery">
            Gallery
          </div>
      </div>
    )
  }
}

export default App;