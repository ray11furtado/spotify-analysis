import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
	class Authentication extends Component {
		static contextTypes = {
			router: PropTypes.object
		}

		componentWillMount(){
			if(!this.props.authenticated) {
				this.context.router.push('/login')
			}
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}
	function mapStateToProps(state){
		return { authenticated: state.authenticated };
	}
	return connect(mapStateToProps)(Authentication);
}