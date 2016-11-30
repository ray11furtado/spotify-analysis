import React from 'react';
import { Route } from 'react-router';
import App from './components/app';
import Home from './components/home';
import Login from './components/login';
import Playlists from './containers/playlists';
import Playlist from './containers/single_playlist';
import SongAnalysis from './containers/song_analysis';
import Graph from './components/graph_test';
import Auth from './components/auth';

export default (
	<Route path="/" component={Auth(App)}>
		<Route path="login" component={Login} />
		<Route path="home" component={Auth(Home)} />
		<Route path="test" component={Auth(Graph)} />
		<Route path="/analyze/:artist/:song" component={Auth(SongAnalysis)} />
		<Route path="/playlist" component={Auth(Playlists)} />
		<Route path="/playlist/:name" component={Auth(Playlist)} />
	</Route>
);
