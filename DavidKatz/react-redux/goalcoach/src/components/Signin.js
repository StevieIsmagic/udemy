import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth()
    .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
      console.log('ERROR', this.state.error);
  }

  render() {
    return (
      <div 
        className="form-inline" 
        style={{margin:'5%', padding: '5%', backgroundColor: 'teal'}}
      >
        <h2 style={{color: 'white'}}>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5%', padding: '5%'}}
            placeholder="email"
            onChange={ event => this.setState({ email: event.target.value }) }
          />
          <input 
            className="form-control"
            type="password"
            style={{marginRight: '5%', marginTop: '1%', padding: '5%'}}
            placeholder="password"
            onChange={ event => this.setState({ password: event.target.value }) }
          />
          <button
            className="btn btn-primary"
            type="button"
            style={{ marginTop: '2%' }}
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'} style={{color:'white'}}> Sign Up Instead </Link></div>
      </div>
    )
  }
}

export default SignIn;