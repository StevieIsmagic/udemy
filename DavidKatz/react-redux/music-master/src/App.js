import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        query: '',
        artist: null,
        tracks: []
      }
  }

  search() {
    console.log('Spotify API', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = `https://api.spotify.com/v1/artists/`;
    let accessToken = 'BQDwb9ex5hVaPiqq34aGA94aJcgISBU00bQGfxekeDfw3-gv0DLlz6xtC0Hez09U6-46ifFls3jo7i43mABmiH-9GEIY4d2-mJZMqm0zadzgHMGRq7nfNy5H_QzB7slvXj-Jo57Bkg-4CibQc_pMJ2Pg1UqgC4U&refresh_token=AQCSl-8shkGWGk6xXrAsT2O5ZJsGlFa_SC9AKV6_rINDHeyImG9l4G8Zt3XLqxAXmicqmA8Dgs3Jtb-g7JT4Tc88NeOMNCJTxAnQNxh9UsY12G-ghamw_tmVR5afcdT4sTQ';
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

        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
        fetch(FETCH_URL, myOptions)
          .then(response => response.json())
          .then(json => {
            console.log('Artist TOP Tracks', json);
            const { tracks } = json;
            this.setState({ tracks });
          })
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
            <Gallery 
              tracks={this.state.tracks}
            />
          </div>
        : <div></div>
        }

      </div>
    )
  }
}

export default App;