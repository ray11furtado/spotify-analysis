import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';
import Navbar from '../containers/navbar';


class Home extends Component {
	constructor(props) {
		super(props);
		this.getPlaylist = this.getPlaylist.bind(this);
	}

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	getPlaylist() {
		console.log('clicked');
		axios.defaults.headers.common['Authorization'] = `Bearer ${this.props.user.accessToken}`;
		axios.get(`https://api.spotify.com/v1/users/${this.props.user.spotify_id}/playlists`)
			.then(res => console.log(res));
	}

	render() {
		return (
			<div>
				<Navbar />
				<button onClick={this.getPlaylist}>Click</button>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Home);
