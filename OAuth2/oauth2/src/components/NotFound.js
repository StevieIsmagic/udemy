import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
    <div>
      Page Not Found! :) 
      <br/>
      <button onClick={this.props.auth.login}>Login</button> First Please
      <br/>
    </div>
    )
  }
}