import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from './loading';

class Home extends Component {

	componentWillMount() {
		this.props.login();
		this.props.signin();
	}

	displayContent() {
		if (this.props.user.id) {
			return <div>Home Page </div>;
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
