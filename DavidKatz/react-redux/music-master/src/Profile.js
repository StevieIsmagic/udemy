import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    let artist = {
      name: '',
      images: [{url: ''}],
      followers: {
        total: ''
      }
    };

    if (this.props.artist !== null) {
      artist = this.props.artist;
    }

    return (
        <div className="Profile">
          <img 
            alt="Profile"
            className="profile-img"
            src={artist.images[0].url}
          />
          <div>Artist Name: {artist.name}</div>
          <div>Followers: {artist.followers.total}</div>
        </div>
    )
  }
}

export default Profile;
