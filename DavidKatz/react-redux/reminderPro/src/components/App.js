import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  addReminder() {
    console.log('this', this);
    this.props.addReminder(this.state.text);
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          Stevie's Reminder App
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input 
              className="form-control"
              placeholder="I have to remember..."
              onChange={(e) => {this.handleChange(e)}}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add A Reminder Stevie!
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addReminder })(App);