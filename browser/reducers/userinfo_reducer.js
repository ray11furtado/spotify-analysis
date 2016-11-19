import {
	SIGN_IN,
} from '../actions/types';

const INITIAL_STATE = { id: null, spotify_id: null };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SIGN_IN:
		console.log(action.payload.id);
			return { ...state, id: action.payload.id, spotify_id: action.payload.spotify_id};
		default:
			return state;
	}
}
