import React, { Component } from 'react';
import SeriesList from './SeriesList.js';
import Loader from './Loader.js';

const inputStyle = {
  color: 'white',
  background: 'grey',
}

export default class Series extends Component {
  
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = (e) => {
    this.setState({ seriesName: e.target.value, isFetching: true })

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then((response) => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));  
    // console.log(e, e.target.value);
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
  console.log(series)
    return (
      <div>
        <h1>Series Component</h1>
        <p> Series Array Length - {series.length}</p>
        <div >
          <input 
            value={seriesName}
            type='text' 
            onChange={this.onSeriesInputChange} 
            style={inputStyle} 
          />
        </div>
          {
            !isFetching && series.length === 0 && seriesName.trim() === ''
            &&
            <p>Please enter series name into the input</p>
          }
          {
            !isFetching && series.length !== 0 && seriesName.trim() !== ''
            &&
            <p>Searching....</p>
          }
          {
            !isFetching && series.length === 0 && seriesName.trim() !== ''
            &&
            <p>No TV Series have been found with this name!</p>
          }
          {
            isFetching && <Loader / >
          }
          {
            !isFetching && <SeriesList list={series}/>
          }
        
      </div>
    )
  }
}
