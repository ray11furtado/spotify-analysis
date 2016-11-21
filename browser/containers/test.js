/* eslint-disable */ 
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Header extends Component {
	authButton(){
		if(this.props.authenticated){
			return <button 
							onClick={() => this.props.logout()}
							className='btn btn-success'>Sign Out</button>;
		}
		return <button onClick={() => this.props.authenticate(true)}className='btn btn-warn'>Sign in</button>;
	}
	button1() {
		return (<button 
							onClick={() => this.props.signin()}
							className='btn btn-success'>
							send false
						</button>);
	}
	button2() {
		return (
			<button onClick={() => this.props.login()}className='btn btn-warn'>seend true</button>
			);
	}

	render() {
		return (
			<nav className="nav-bar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						{this.authButton()}
					</li>
					<li className="nav-item">
						{this.button1()}
					</li>
					<li className="nav-item">
						{this.button2()}
					</li>
				</ul>
			</nav>
			);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
