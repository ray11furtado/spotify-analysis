import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from './loading';

require('../style/search_song.scss');

class Home extends Component {
	constructor() {
		super();
		this.state = { songName: '', artist: '' };
		this.onSongChange = this.onSongChange.bind(this);
		this.onArtistChange = this.onArtistChange.bind(this);
	}
	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	onSongChange(event) {
		this.setState({ songName: event.target.value });
	}

	onArtistChange(event) {
		this.setState({ artist: event.target.value });
	}

	displayContent() {
		if (this.props.user.id) {
			return <div>{this.searchBar()} </div>;
		} return <Loading />;
	}

	searchBar() {
		return (
			<div
				className="search-song input-group"
			>
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
			<span className="input-group-btn">
				<button
					className="btn btn-success"
					onClick={() => this.props.searchSongs(this.state.songName, this.state.artist).bind(this)}
				>
					Submit
				</button>
			</span>
		</div>
		);
	}

	render() {
		return (
			<div>{this.displayContent()}</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Home);
