import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from '../components/loading';

class singePlaylist extends Component {
	displayTitle() {
		if (this.props.search.content) {
			return <h2>{this.props.search.content.name}</h2>;
		} return <div />;
	}

	displayTracks() {
		if (this.props.search.tracks) {
			const songs = this.props.search.tracks.items;
			return songs.map(song =>
				<div>{song.track.name}, {song.track.artists[0].name}</div>,
			);
		} return <Loading />;
	}


	render() {
		return (
			<div>
				{this.displayTitle()}
				{this.displayTracks()}
				<button onClick={this.props.searchSongs}>Search songs</button>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { search: state.search };
}

export default connect(mapStateToProps, actions)(singePlaylist);
