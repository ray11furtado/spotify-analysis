import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Navbar extends Component {
	authButton() {
		if (this.props.authenticated) {
			console.log(this.props.authenticated);
			return (<button onClick={() => this.props.changeAuth(false)} className="btn btn-success">
								Sign Out
							</button>);
			}
			console.log(this.props.authenticated);
			return (<button onClick={() => this.props.changeAuth(true)} className="btn btn-warn">
								Sign in
							</button>);
	}
	render() {
		return (
			<div>
				{this.authButton()}
			</div>
			);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Navbar);

