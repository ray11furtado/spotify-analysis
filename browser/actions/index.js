import {
	LOG_IN,
	LOG_OUT,
 } from './types';

export function login() {
	return {
		type: LOG_IN,
		payload: true,
	};
}

export function logout() {
	return {
		type: LOG_OUT,
		payload: false,
	};
}
