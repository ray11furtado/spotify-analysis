import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	displayPlaylist() {
		if (this.props.user.playlist[0]) {
			const allPlaylist = this.props.user.playlist;
			return allPlaylist.map(singlePlaylist =>
				<li key={singlePlaylist.href}>{singlePlaylist.name}</li>);
		} return <div className="text-center">Loading...</div>;
	}

	render() {
		return (
			<div>
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

export default connect(mapStateToProps, actions)(Home);
