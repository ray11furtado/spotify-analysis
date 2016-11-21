import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Playlists from '../containers/playlists';
import * as actions from '../actions';

require('../style/home.scss');

class Home extends Component {

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	displayPlaylist() {
		if (this.props.user.playlist[0]) {
			const allPlaylist = this.props.user.playlist;
			return allPlaylist.map(singlePlaylist =>
				<div key={singlePlaylist.snapshot_id} className="col-md-3 playlist-container">
					<div className="container">
						<h5><strong>{singlePlaylist.name}</strong></h5>
						<img
							src={singlePlaylist.images[0] ? singlePlaylist.images[0].url : 'https://image.freepik.com/free-icon/question-mark_318-52837.jpg'}
							alt="Playlist"
							className="playlist-img"
						/>
					</div>
				</div>,
			);
		} return <div className="text-center loading">Loading...</div>;
	}

	header() {
		if (this.props.user.playlist[0]) {
			return <div className="playlist-header text-center">Your Playlist</div>;
		} return <div />;
	}

	render() {
		return (
			<div className="home container">
					<h2>{this.header()}</h2>
				<ul>
					{this.displayPlaylist()}
					{this.props.children}
				</ul>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Home);
