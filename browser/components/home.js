import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

require('../style/home.scss');

class Home extends Component {

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}



	render() {
		return (
			<div>Home Page</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Home);
