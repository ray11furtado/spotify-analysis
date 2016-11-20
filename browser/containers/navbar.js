import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

require('../style/navbar.scss');

class Navbar extends Component {

	display() {
		if (this.props.user.spotify_id) {
			return (
				<div className="mynav">
				<nav className="nav-bar navbar-light">
					<ul className="nav navbar-nav">
						<li className="nav-item">
							Spotify Account: <span className="account">{this.props.user.spotify_id}</span>
						</li>
					</ul>
				</nav>
				<button className="btn btn-danger pull-right" onClick={() => this.props.logout()}>
					Logout
				</button>
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

