import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '082cbb8db47b5c95ae1fe6fe92ba44ca';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Miami',
      description: ''
    };
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    /*
    Promise -handles the eventual result of an event / function
    */
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`
    )
      .then(response => response.json())
      .then(json =>
        this.setState({ description: json.weather[0].description })
      );
  }

  render() {
    return (
      <div>
        <h1>Weather Report for {this.state.city}!</h1>
        <h2>{this.state.description}</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
