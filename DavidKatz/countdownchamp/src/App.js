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
    fetch(`http://api.tvmaze.com/search/shows?q=Vikings`)
      .then((response) => response.json())
      .then(json => {
        this.setState({
          series: this.state.series.concat(json)
        })
      });

      // Example Using SetTimeout to update State
      const shows = ['Garfield', 'Happy Days'];
      setTimeout(() => {
        this.setState({ series: this.state.series.concat(shows) });
      }, 3000);
      
      
    }
    
    getCurrentDate() {
      let date = new Date();
      return date.toDateString();
    }
    
    render() {
      
      console.log(this.state.series)
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