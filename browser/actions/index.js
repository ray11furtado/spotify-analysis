import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	LOG_IN,
	LOG_OUT,
	SIGN_IN,
	SEARCH_PLAYLIST,
 } from './types';

const spotify = 'https://api.spotify.com';

export function login() {
	return (dispatch) => {
		dispatch({ type: LOG_IN });
		browserHistory.push('/home');
	};
}

export function logout() {
	return (dispatch) => {
		axios.get('/api/users/signout')
			.then(() => {
				dispatch({ type: LOG_OUT, payload: null });
				browserHistory.push('/login');
			});
		};
}

export function signin() {
	return (dispatch) => {
		axios.get('/api/users/info')
		.then((res) => {
				const data = res.data;
				axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
				axios.get(`${spotify}/v1/users/${data.spotify_id}/playlists`)
				.then(response => response.data.items)
				.then((playlists) => {
					data.playlists = playlists;
					dispatch({ type: SIGN_IN, payload: data });
				});
		}).catch(() => browserHistory.push('/login'));
	};
}

export function searchPlaylist(playlistHref, name) {
	return (dispatch) => {
		axios.get('/api/users/info')
		.then((res) => {
			const data = res.data;
			data.type = 'playlist';
			axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
			axios.get(`${playlistHref}`)
			.then((singlePlaylist) => {
				data.content = singlePlaylist.data;
				dispatch({ type: SEARCH_PLAYLIST, payload: data });
			})
			.then(() => {
				browserHistory.push(`/playlist/${name}`);
			});
		}).catch(() => browserHistory.push('/login'));
	};
}
