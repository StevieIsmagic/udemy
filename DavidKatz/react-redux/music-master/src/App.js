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
    let accessToken = 'BQAncyHIlAs_8Rfv-eZNlM3RCBbm9e93CxZXzHjwVpyXfXvWxlsjlCkoLcmjjqEtUXs47FBZcjidj8-w6gA-7zOLwAX4tpx80Lr4izPl2wUinzk1VUFugCxDeOnaNkTBdvSrEXLyOxygXMN1ZFmArB_tUrSzB10&refresh_token=AQCm505nv8B_hh3Rs_vr3YLR0g3p-3LqyPG72xPfVT-d_4pFH8yxWjMByWTduqN1Rv_yqRcnbIaguK_Y_AZbz7UnvAdPoxxD34XVm8qtU2lf4J7Np-5ZMaxskW43r0ZYaPU'
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
        <p>so keep the hope alive, lover.</p>
        <p>We are lovers of the beautiful</p>
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
        <Profile 
          artist={this.state.artist} 
        />
          <div className="Gallery">
            Gallery
          </div>
      </div>
    )
  }
}

export default App;