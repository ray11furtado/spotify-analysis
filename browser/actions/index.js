import axios from 'axios';
import { browserHistory } from 'react-router';
import { musixAPI } from '../config';
import {
	LOG_IN,
	LOG_OUT,
	SIGN_IN,
	SEARCH_PLAYLIST,
	GET_LYRICS,
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

export function notFound(error) {
	return {
		type: LYRICS_ERROR,
		payload: error,
	};
}

export function searchSongs(songName, artist) {
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
				dispatch({ type: GET_LYRICS, payload: result });
			})
			.then(() => {
				browserHistory.push(`/analyze/${artist}/${songName}`);
			})
			.catch(() => {
				dispatch(notFound(`Lyrics not found for ${songName}`));
			});
		});
	};
}

export function analyzeLyrics(lyrics) {
	if (lyrics <= 10) {
		return (dispatch) => {
			dispatch({ type: ANALYZE_SONG, payload: undefined });
		};
	}
	const data = {};
	return (dispatch) => {
		function analyzeEmotion() {
			return axios.post('/api/analyze/emotion', {
				lyrics,
			});
		}
		function analyzeSentiment() {
			return axios.post('/api/analyze/sentiment', {
				lyrics,
			});
		}
		axios.all([analyzeEmotion(), analyzeSentiment()])
		.then(axios.spread((emotion, sentiment) => {
			const emotions = [];
			const sentiments = [];
			emotions.push({ emotion: 'Anger', score: parseFloat(emotion.data.docEmotions.anger) });
			emotions.push({ emotion: 'Disgust', score: parseFloat(emotion.data.docEmotions.disgust) });
			emotions.push({ emotion: 'Fear', score: parseFloat(emotion.data.docEmotions.fear) });
			emotions.push({ emotion: 'Joy', score: parseFloat(emotion.data.docEmotions.joy) });
			emotions.push({ emotion: 'Sadness', score: parseFloat(emotion.data.docEmotions.sadness) });
			sentiments.push({ score: parseFloat(sentiment.data.docSentiment.score) });
			data.emotions = emotions;
			data.sentiments = sentiments;
			dispatch({ type: ANALYZE_SONG, payload: data });
		}))
		.catch(() => {
			dispatch(notFound('Analysis Failed'));
		});
	};
}
