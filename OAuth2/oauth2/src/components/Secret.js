import React, { Component } from 'react';

export default class Secret extends Component {
  render() {
    return (
    <div>
      <br/>
      This is a super secret AREA! :) 
      <hr/>
      Return Back <a href="/"> HOME</a>?
      <hr/>
      <button onClick={this.props.auth.logout}>LOGOUT</button>
      <hr/>

    </div>
    )
  }
}