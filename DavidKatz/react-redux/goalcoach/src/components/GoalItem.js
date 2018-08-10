import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoal, completeGoalRef } from '../firebase'; 

class GoalItem extends Component {
  completeGoal() {
    // add to complete goals in the db
    // remove this goal from the goals reference
    const { email } = this.props.user;
    const { title } = this.props.goal;
    completeGoalRef.push({email, title});
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '5%'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5%'}}> submitted by <em>{email}</em></span>
        <button 
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;

  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem);