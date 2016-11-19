import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Navbar extends Component {
	display() {
		if (this.props.authenticated) {
			return <div>Spotify Account: { this.props.user.spotify_id }</div>;
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

