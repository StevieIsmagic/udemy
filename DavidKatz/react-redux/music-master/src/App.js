import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        query: ''
      }
  }

  search() {
    console.log('Spotify API', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    
    console.log('FETCH_URL', FETCH_URL);
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Stevie's Music Box</div>
        <p>Life inside the musicbox aint easy..</p>
        <FormGroup>
          <InputGroup>
            <FormControl 
              type='text'
              placeholder='Search for an Artist?'
              value={this.state.query}
              onChange={ event => { this.setState({ query: event.target.value })}}
              onKeyPress={ event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
          <div className="Gallery">
            Gallery
          </div>
      </div>
    )
  }
}

export default App;