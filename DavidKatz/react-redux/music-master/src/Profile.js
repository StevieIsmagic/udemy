import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    let artist = {
      name: '',
      images: [],
      followers: {
        total: ''
      }
    };

    if (this.props.artist !== null) {
      artist = this.props.artist;
    }

    return (
      <div>
        <div className="Profile">
          <div>Artist Image: TBD</div>
          <div>Artist Name: {artist.name}</div>
          <div>Followers: {artist.followers.total}</div>
        </div>
      </div>
    )
  }
}

export default Profile;
