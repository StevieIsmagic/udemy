import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div style={{margin: '5%'}}> 
        <h2>Dream Goals</h2>
        <hr/>
        <h3>Current User: { this.props.user.email }</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Complete Goal List</h4>
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log('App MSTP', state);
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps, null)(App);