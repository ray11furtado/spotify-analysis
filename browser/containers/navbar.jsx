import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

require('../style/navbar.scss');


class Navbar extends Component {

	display() {
		if (this.props.user.spotify_id) {
			return (
				<div className="mynav">
				<Link className="pull-left home-link" to={'home'}> Home</Link>
				<Link className="home-link" to={'playlist'}>Your Playlists</Link>
				<Link className="logout" onClick={() => this.props.logout()}>
					Logout
				</Link>
				<span className="pull-right">
						Spotify Account: <span className="account">{this.props.user.spotify_id}</span>
				</span>
				</div>
				);
		}
		return <div />;
	}

	render() {
		return (
			<div>
				{this.display()}
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated,
						user: state.user };
}

export default connect(mapStateToProps, actions)(Navbar);
