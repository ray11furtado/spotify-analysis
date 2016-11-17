import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default class SignIn extends Component {
	render(){
		return(
			<form onSubmit={this.hangleLogIn} className="input-group"></form>
			)
	}
}