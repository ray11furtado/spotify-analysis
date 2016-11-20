import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import * as actions from '../actions';
import Navbar from '../containers/navbar';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { playlist: null };
		this.renderPlaylist = this.renderPlaylist.bind(this);
	}

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}
	renderPlaylist() {
		if (this.props.user.spotify_id) {
				axios.defaults.headers.common['Authorization'] = `Bearer ${this.props.user.accessToken}`;
				axios.get(`https://api.spotify.com/v1/users/${this.props.user.spotify_id}/playlists`)
			.then(res => res.data.items)
			.then((playlist) => {
				const items = playlist.map(() => <li>hello</li>);
				return items;
				},
			);
		} return <div>No Playlist Found </div>;
	}

	render() {
		return (
			<div>
				<Navbar />
				<ul>
					{this.renderPlaylist()}
				</ul>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Home);
