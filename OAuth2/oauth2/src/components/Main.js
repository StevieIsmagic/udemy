import React, {
  Component
} from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Hello {this.props.name}! <br/>
          Do you want to see a secret area? <br/>
          <a href="/secret">Click Here :)</a>
        </p>
        <div>
          <hr/>
          Please Login First
          <hr/>
          <button onclick={this.props.auth.login}>LOGIN :)</button>

        </div>
      </div>
    )
  }
}