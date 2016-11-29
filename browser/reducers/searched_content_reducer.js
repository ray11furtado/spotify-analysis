import {
	SEARCH_PLAYLIST,
	SEARCH_SONG,
} from '../actions/types';

const INITIAL_STATE = { type: null, content: null, tracks: null, analyzed: null };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_PLAYLIST:
			return { ...state,
				type: action.payload.type,
				content: action.payload.content,
				tracks: action.payload.tracks,
			};
		default:
			return state;
	}
}
