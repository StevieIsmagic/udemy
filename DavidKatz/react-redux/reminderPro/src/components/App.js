import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from '../actions';


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

  deleteReminder(id) {
    console.log('deleting in App.js');
    console.log('Delete Reminder this.props', this.props);
    this.props.deleteReminder(id);
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
                <div className="list-item">{ reminder.text}</div>
                <div 
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                  >
                  &#x2715;
                </div>
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
          Stevie's Personal Reminder App
          <p>Get Your Reminder Game Up - Hopefully!</p>
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
//                                          Actions
export default connect(mapStateToProps, { addReminder, deleteReminder })(App);