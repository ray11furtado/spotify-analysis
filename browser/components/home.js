import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Home extends Component {

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	render() {
		return (
			<div>
				Welcome to the Home Page
				{this.props.user.id}
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Home);
