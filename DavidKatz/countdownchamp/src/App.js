import React, { Component } from 'react';
import 'whatwg-fetch';

const Intro = (props) => (
  <p className='App-Intro'>
    {props.message}
  </p>
)

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    // Example Using SetTimeout to update State
    const series = ['Garfield', 'Happy Days', 'Captain Planet'];
    setTimeout(() => {
      this.setState({ series: series });
    }, 2000);
  }

  getCurrentDate() {
    let date = new Date();
    return date.toDateString();
  }

  render() {
    return (
      <div> 
        <h1>Countdown - Stevie - App Component </h1>
        <h2>{this.getCurrentDate()}</h2>
        <hr/>
        <h1>TV SERIES LIST </h1>
        <Intro message='Here you can find all your love:)' />
        Series Array Length - {this.state.series.length}
      </div>

    )
  }
}

export default App;