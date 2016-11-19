import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from '../containers/navbar';


class Home extends Component {

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	render() {
		return (
			<div>
				<Navbar />
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

export default connect(mapStateToProps, actions)(Home);
