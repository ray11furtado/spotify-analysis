import {
	SIGN_IN,
	LOG_OUT,
} from '../actions/types';

const INITIAL_STATE = { id: null, spotify_id: null };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SIGN_IN:
			return { ...state, id: action.payload.id, spotify_id: action.payload.spotify_id };
		case LOG_OUT:
			return { ...state, id: null, spotify_id: null };
		default:
			return state;
	}
}
