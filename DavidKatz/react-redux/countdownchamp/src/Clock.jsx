import React, { Component } from 'react';
import './App.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('this.props', this.props)
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('TIME', time);
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    console.log('sec', seconds, 'min', minutes, 'hr', hours, 'day', days)
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
  }

  render() {
    this.getTimeUntil(this.props.deadline)
    return (
      <div>
        <div className="days">{this.state.days} Days</div>
        <div className="hours">{this.state.hours} Hours</div>
        <div className="minutes">{this.state.minutes} Minutes</div>
        <div className="seconds">{this.state.seconds} Seconds</div>
      </div>
    )
  }
}

export default Clock;