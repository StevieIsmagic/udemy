import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  playAudio(preview_url) {
    let audio = new Audio(preview_url);
    audio.play();
  }

  render() {
    console.log('Gallery Props', this.props);
    const { tracks } = this.props;

    return (
      <div>
        {
          tracks.map((track, k) => {
            const trackImg = track.album.images[0].url;
            return (
              <div
                key={k}
                className="track"
                onClick={() => this.playAudio(track.preview_url)}
              >
                <img 
                  src={trackImg}
                  className="track-img"
                  alt="track"
                />
                <p className="track-text">
                  {track.name}
                </p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default Gallery;