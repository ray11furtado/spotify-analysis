import {
	SEARCH_PLAYLIST,
} from '../actions/types';

const INITIAL_STATE = { type: null, content: null };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_PLAYLIST:
			return { ...state,
				type: action.payload.type,
				content: action.payload.content,
			};
		default:
			return state;
	}
}