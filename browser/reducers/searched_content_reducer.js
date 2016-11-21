import {
	SEARCH_PLAYLIST,
} from '../actions/types';

const INITIAL_STATE = { type: null, content: null, tracks: null };

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_PLAYLIST:
		// console.log('form reducer content:', action.payload.content);
		// console.log('form reducer tracks:', action.payload.tracks);
			return { ...state,
				type: action.payload.type,
				content: action.payload.content,
				tracks: action.payload.tracks,
			};
		default:
			return state;
	}
}
