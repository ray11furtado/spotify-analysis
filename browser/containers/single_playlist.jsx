import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from '../components/loading';

require('../style/singlePlaylist.scss');

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
				<li key={song.track.name}>
					<button
						className="song"
						onClick={() => this.props.searchSongs(song.track.name, song.track.artists[0].name)}
					>
						{song.track.name}, {song.track.artists[0].name}
					</button>,
				</li>,
			);
		} return <Loading />;
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
