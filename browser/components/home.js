import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from 'lodash';
import * as actions from '../actions';
import Navbar from '../containers/navbar';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { playlist: null };
	}

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
