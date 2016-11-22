import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class singePlaylist extends Component {
	displayTitle() {
		if (this.props.search.content) {
			return <h2>{this.props.search.content.name}</h2>;
		} return <h2>Loading Playlist...</h2>;
	}

	displayTracks() {
		if (this.props.search.tracks) {
			const songs = this.props.search.tracks.items;
			return songs.map(song =>
				<div>{song.track.name}, {song.track.artists[0].name}</div>,
			);
		} return <div>Loading Tracks...</div>;
	}

	render() {
		return (
			<div>
				{this.displayTitle()}
				{this.displayTracks()}
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { search: state.search };
}

export default connect(mapStateToProps, actions)(singePlaylist);
