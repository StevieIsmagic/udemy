import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        query: '',
        artist: null,
        tracks: null
      }
  }

  search() {
    console.log('Spotify API', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = `https://api.spotify.com/v1/artists/`;
    let accessToken = 'BQCdtGNecHSKd-BrvbUKj_ZmbK4K0vOdOE4BgNHbbr_Nf20UkqXsiXNyL9Tn0iciRVMg8LicPE5yGkWx73wr4GiRIpb1m8PYhKO8rRAPnMlDHIVW--06zwPENX_0oVcrEStyXdYZRNLZ0M3knrkpKDIeKQqRNNM&refresh_token=AQAqfYV2OUW9RwVdZfO5ZQGdfMbMjw5fYOvBDoQMjZZ4jgDOQx4lKRFb9lJIsgPiS1yIDd-RftjhIhQo-oC_Dmg1R5ZTiqZZN2M1H1vstf9qSVYye9mcr-63H4e4wPkCy0A';
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