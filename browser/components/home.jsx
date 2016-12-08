import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchBar from './search_bar';
import Loading from './loading';

require('../style/search_song.scss');

class Home extends Component {

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	displayContent() {
		if (this.props.user.id) {
			return <SearchBar />;
		} return <Loading />;
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
