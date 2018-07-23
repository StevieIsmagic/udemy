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

  renderReminders() {
    const { reminders } = this.props;
    // console.log('Render Reminders', reminders);

    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map( reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>{ reminder.text}</div>
              </li>
            )
          })
        }
      </ul>
    )
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
        <div className="form-inline reminder-form">
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
        { this.renderReminders() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('MSTP state', state);
  return {
    reminders: state
  }
}
//                                          Action
export default connect(mapStateToProps, { addReminder })(App);