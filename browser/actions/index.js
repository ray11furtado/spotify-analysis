import axios from 'axios';
import { browserHistory } from 'react-router';
import { musixAPI } from '../config';
import {
	LOG_IN,
	LOG_OUT,
	SIGN_IN,
	SEARCH_PLAYLIST,
	SEARCH_SONG,
	ANALYZE_SONG,
	LYRICS_ERROR,
 } from './types';


const spotify = 'https://api.spotify.com';
const MusixMatch = 'https://api.musixmatch.com/ws/1.1/';
const LyricAPI = `&apikey=${musixAPI}`;
const format = 'format=jsonp&callback=callback';


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

export function noLyrics(error) {
	return {
		type: LYRICS_ERROR,
		payload: error,
	};
}

export function searchSongs(artist, songName) {
	console.log('Searching Song...');
	const songData = {};
	songData.artist = artist;
	songData.songName = songName;
	return (dispatch) => {
		axios.get(`${MusixMatch}matcher.track.get?${format}&q_artist=${artist}&q_track=${songName}${LyricAPI}`)
		.then((res) => {
			const data = res.data;
			const id = data.match(/"track_id":(\d+)/)[0].split(':')[1];
			axios.get(`${MusixMatch}track.lyrics.get?${format}&track_id=${id}${LyricAPI}`)
			.then((response) => {
				const lyricData = response.data;
				const lyrics = lyricData.match(/("lyrics_body":")(.[^\*\n])*/)[0].split(':')[1];
				let result = '';
				for (let i = 0; i < lyrics.length; i++) {
					if (lyrics[i] === '\\' && lyrics[i + 1] === 'n') {
						result += ' ';
					} else if (lyrics[i] === 'n' && lyrics[i - 1] === '\\') {
						result += '';
					} else {
						result += lyrics[i];
					}
				}
				console.log(result);
				songData.lyrics = result;
				dispatch({ type: SEARCH_SONG, payload: songData });
			})
			.catch(() => {
				dispatch(noLyrics(`Lyrics not found for ${songName}`));
			});
		});
	};
}

export function analyzeLyrics() {
	return (dispatch) => {
		const lyrics = 'You were in college, working part-time waiting tables left a small town never looked back';
		axios.post('/api/analyze/lyrics', {
			lyrics,
		})
		.then((res) => {
			console.log(res);
		});
		dispatch({ type: ANALYZE_SONG });
	};
}
