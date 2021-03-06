import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Login from './components/login';
import Playlists from './containers/playlists';
import Playlist from './containers/single_playlist';
import SongAnalysis from './containers/song_analysis';
import Guest from './containers/guest_home';
import Auth from './components/auth';
import gAuth from './components/guest_auth';

export default (
	<Route path="/" component={Auth(App)}>
		<Route path="login" component={Login} />
		<Route path="home" component={Auth(Home)} />
		<Route path="guest" component={gAuth(Guest)} />
		<Route path="/guest/analyze/:artist/:song" component={gAuth(SongAnalysis)} />
		<Route path="/analyze/:artist/:song" component={Auth(SongAnalysis)} />
		<Route path="/playlist" component={Auth(Playlists)} />
		<Route path="/playlist/:name" component={Auth(Playlist)} />
	</Route>
);
