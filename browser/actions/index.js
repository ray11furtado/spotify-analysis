import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	LOG_IN,
	LOG_OUT,
	SIGN_IN,
 } from './types';

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
				dispatch({ type: SIGN_IN, payload: res.data });
		}).catch(() => browserHistory.push('/login'));
	};
}

