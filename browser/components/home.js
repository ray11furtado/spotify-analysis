import React, { Component } from 'react';
import axios from 'axios';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Home extends Component {

	componentWillMount() {
		this.props.login();
		axios.get('api/users/info')
		.then(res => console.log(res));
	}

	render() {
		return (
			<div>
				Welcome to the Home Page
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Home);
