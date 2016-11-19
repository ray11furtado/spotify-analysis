import { CHANGE_AUTH } from './types';

export function changeAuth(isLoggedIn) {
	console.log('from the action', isLoggedIn)
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn,
	};
}