import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
		<div>
			Home Page
			{this.props.children}
		</div>
		);
	}
}
