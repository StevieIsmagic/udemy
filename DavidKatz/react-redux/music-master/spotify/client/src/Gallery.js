import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingUrl: '',
      audio: null,
      playing: false
    }
  }

  playAudio(preview_Url) {
    let audio = new Audio(preview_Url);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: preview_Url,
        audio
      })
    } else {
      if (this.state.playingUrl === preview_Url) {
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: preview_Url,
          audio
        })
      }
    }
   
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