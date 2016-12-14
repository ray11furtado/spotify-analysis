import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

require('../style/search_song.scss');

class searchBar extends Component {
  constructor() {
    super();
    this.state = { songName: undefined, artist: undefined };
    this.onSongChange = this.onSongChange.bind(this);
    this.onArtistChange = this.onArtistChange.bind(this);
  }
  onSongChange(event) {
    this.setState({ songName: event.target.value });
  }

  onArtistChange(event) {
    this.setState({ artist: event.target.value });
  }
  render() {
    return (
      <div className="search-song input-group">
        <input
          className="form-control"
          placeholder="Song Name"
          onChange={this.onSongChange}
        />
        <input
          className="form-control"
          placeholder="Artist"
          onChange={this.onArtistChange}
        />
      <span className="input-group">
        <button
          className="btn-md search-btn"
          disabled={!this.state.songName || !this.state.artist}
          onClick={() => this.props.searchSongs(this.state.songName, this.state.artist)}
        >
          Search
        </button>
      </span>
    </div>
  );
  }
}

export default connect(null, actions)(searchBar);
