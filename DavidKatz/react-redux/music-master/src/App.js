import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

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
    let accessToken = 'BQAcEpQR3EP1bqWRVEkhpsDRd1ujOzuZjV7_ZZZ3GMQpVwg93VGZJ2oJm34SrC02OZVU7-O14TrVIwhrFsH1u1Ku4xVOpl8cKHbhGAJUMg3IWd3IOpfR8JVmaltz8duYuIOk229Nfwq-zto8V_AZOsPiG4HnXhc&refresh_token=AQB3HXlC0paHd0fFq8O2AmkBSh0_r_i3zJUqvRGWx_kj3Z8Hp2knUVj_j1Q_2HCy89CsUfZN_nhvgr3lZqu65QaD4c_R2cORJw4SvbHxviuqrAhuinrmqr9atdwPZm8AHgY'
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
        const artist = json.artists.items[0];
        this.setState({ artist });
      })
  }

  render() {

    let artist = {
      name: '',
      followers: {
        total: ''
      }
    };

    if (this.state.artist !== null) {
      artist = this.state.artist;
    }

    return (
      <div className="App">
        <div className="App-title">Stevie's Music Box</div>
        <p>Life inside the musicbox aint easy..</p>
        <p>so keep the hope alive, lover.</p>
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
          <div>Artist Name: {artist.name}</div>
          <div>Followers: {artist.followers.total}</div>

        </div>
          <div className="Gallery">
            Gallery
          </div>
      </div>
    )
  }
}

export default App;