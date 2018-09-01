import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        query: '',
        artist: null
      }
  }

  search() {
    console.log('Spotify API', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    let accessToken = 'BQCLDaCWo_V8eXhFoNy4HN_AixFM9AwuAtm-RWp2VPXwG-MKB511Ho6Yw7-KEr2XFlbd_4cx-RWw2ETcvNirUDo5VqFHqlzQW_UVnqgG0OAaenP-kzUuAeBhGDOoUl9Ffn0iHxjHdGy5MgxGPnW2ITYBFk3v_Ew&refresh_token=AQAr_A1WtmLre1O1iYxXhV4SFtgVH95Smwp7Y63_vdS463WlsUU8_avxgh38SPoEo5NhcIJhmSdcmwGYkhn3D7xSBM3clpROzvMVcBSfQVjXj_KrqOsAycPfciXYDtSJJSc';
    console.log('FETCH_URL', FETCH_URL);

    let myOptions = {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        console.log('STEVIE\'S FETCHED RESPONSE:', json)
        const artist = json.artists.items[0];
        this.setState({ artist });
      })
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
        {
        this.state.artist !== null
        ? <div>
            <Profile 
              artist={this.state.artist} 
            />
            <div className="Gallery">
              Gallery
            </div>
          </div>
        : <div></div>
        }

      </div>
    )
  }
}

export default App;