import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebase, firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/Signin';
import SignUp from './components/Signup';


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User has signed in or up', user);
  } else {
    console.log('User has signed out or still needs to sign in.')
  }
})

ReactDOM.render(
<Router path="/" history={browserHistory}>
  <Route path="/app" component={App} />
  <Route path="/signin" component={SignIn} />
  <Route path="/signup" component={SignUp} />
</Router>, document.getElementById('root'));