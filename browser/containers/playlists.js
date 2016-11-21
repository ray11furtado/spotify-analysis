import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Playlists extends Component {

	render(){
		return(
			<div>{this.displayPlaylist()}</div>
			);
	}

}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Playlists);
