import axios from 'axios';
import { browserHistory } from 'react-router';
import LyricsKEY from '../config';
import {
	LOG_IN,
	LOG_OUT,
	SIGN_IN,
	SEARCH_PLAYLIST,
	SEARCH_SONG,
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
				const axiosSpotify = axios.create({
					headers: { 'Authorization': `Bearer ${data.access_token}` },
				});
				axiosSpotify.get(`${spotify}/v1/users/${data.spotify_id}/playlists`)
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
			const axiosSpotify = axios.create({
				headers: { 'Authorization': `Bearer ${data.access_token}` },
			});
			axiosSpotify.get(`${playlistHref}`)
			.then((singlePlaylist) => {
				data.content = singlePlaylist.data;
			})
			.then(() => {
				axiosSpotify.get(`${playlistHref}/tracks`)
				.then((songs) => {
					data.tracks = songs.data;
					dispatch({ type: SEARCH_PLAYLIST, payload: data });
				});
			})
			.then(() => {
				browserHistory.push(`/playlist/${name}`);
			});
		}).catch(() => browserHistory.push('/login'));
	};
}

export function searchSongs() {
	console.log('Searching Song...');
	return (dispatch) => {
		axios.get(`https://api.musixmatch.com/ws/1.1/matcher.track.get?format=jsonp&callback=callback&q_artist=taylor%20swift&q_track=mine&apikey=${LyricsKEY}`)
		.then((res) => {
			console.log(res);
			dispatch({ type: SEARCH_SONG, payload: res });
		});
	};
}
