import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {

      }
    }
  }

  signUp() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  render() {
    return (
      <div className="form-inline" style={{margin:'5%', padding: '5%', backgroundColor: 'teal'}}> 
        <h2 style={{color: 'white'}}> Sign Up </h2> 
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5%', padding: '5%'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5%', padding: '5%'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            style={{ marginTop: '2%'}}
            onClick={() => this.signUp()}
          >
            Sign up
          </button>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    )
  }
}

export default SignUp;