import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Login from './components/login';
import Playlist from './containers/playlists';
import Auth from './components/auth';

export default (
	<Route path="/" component={Auth(App)}>
		<Route path="login" component={Login} />
		<Route path="home" component={Auth(Home)} />
		<Route path="/playlist" component={Playlist} />

	</Route>
);
