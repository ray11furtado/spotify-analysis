import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class singePlaylist extends Component {

	display() {
		console.log(this.props.search.content);
		if (this.props.search.content.name) {
			const playlist = this.props.search.content.name;
			return <div>playlist</div>;
		} return <div>Loading...</div>;
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
	return { search: state.search };
}

export default connect(mapStateToProps, actions)(singePlaylist);
