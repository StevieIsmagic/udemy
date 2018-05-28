import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Hello {this.props.name}! <hr/>
          Do you want to see a secret area? <br/>
          <a href="/secret">Click Here :)</a>
        </p>

        {!this.props.auth.isAuthenticated() &&
        <div>
          <hr/>
          Please Login First
          <hr/>
          <button onClick={this.props.auth.login}> LOGIN :) </button>
        </div>
        }
      </div>
    )
  }
}