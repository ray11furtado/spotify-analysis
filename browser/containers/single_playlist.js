import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class singePlaylist extends Component {

	display() {
		console.log(this.props.search);
		if (this.props.search) {
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
