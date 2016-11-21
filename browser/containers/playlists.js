import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

require('../style/playlist.scss');

class Playlists extends Component {

	header() {
		if (this.props.user.playlist[0]) {
			return <div className="playlist-header text-center">Your Playlist</div>;
		} return <div />;
	}

	displayPlaylist() {
		if (this.props.user.playlist[0]) {
			const allPlaylist = this.props.user.playlist;
			console.log(allPlaylist[0]);
			return allPlaylist.map(singlePlaylist =>
				<div key={singlePlaylist.snapshot_id} className="col-md-3 playlist-container">
					<div className="container">
						<h5><strong>{singlePlaylist.name}</strong></h5>
						<img
							src={singlePlaylist.images[0] ? singlePlaylist.images[0].url : 'https://image.freepik.com/free-icon/question-mark_318-52837.jpg'}
							alt="Playlist"
							className="playlist-img"
						/>
						<button onClick={() => this.props.searchPlaylist(singlePlaylist.href)}>Analyze</button>
					</div>
				</div>,
			);
		} return <div className="text-center loading">Loading Your Playlists </div>;
	}
	render() {
		return (
			<div className="home container">
				<h2>{this.header()}</h2>
				<ul>
					{this.displayPlaylist()}
				</ul>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}
export default connect(mapStateToProps, actions)(Playlists);