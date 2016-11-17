import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import Login from './components/LogIn';
import Auth from './components/require_auth';

export default (
	<Route path="/" component={Auth(App)}>
		<Route path="login" component={Login} />
	</Route>
);
