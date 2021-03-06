import React, { Component } from 'react';

import Main from './Main.js';
import 'whatwg-fetch';
import ProductList from './Practice.js';


const Intro = (props) => (
  <p className='App-Intro'>
    {props.message}
  </p>
)

class App extends Component {
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
        <h1>React Basics - Udemy</h1>
        <h2>TV SERIES LIST </h2>
        <Intro message='Here you can find all your love:)' />
        <Main />
        <hr />
        <ProductList />
      </div>

    )
  }
}

export default App;