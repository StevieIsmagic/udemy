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
  
  componentWillMount() {
    this.getTimeUntil(this.props.deadline)
  }
  
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  leadingZero(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({
      days, hours, minutes, seconds
    })
  }

  render() {
    return (
      <div>
        <div className="days">{this.leadingZero(this.state.days)} Days</div>
        <div className="hours">{this.leadingZero(this.state.hours)} Hours</div>
        <div className="minutes">{this.leadingZero(this.state.minutes)} Minutes</div>
        <div className="seconds">{this.leadingZero(this.state.seconds)} Seconds</div>
      </div>
    )
  }
}

export default Clock;