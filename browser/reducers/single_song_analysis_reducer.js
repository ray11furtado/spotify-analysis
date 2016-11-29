import {
  ANALYZE_SONG,
  LYRICS_ERROR,
  GET_LYRICS,
} from '../actions/types';

const INITIAL_STATE = { songData: null, emotion: null, sentiment: null, error: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LYRICS:
      return { ...state,
            songData: action.payload,
          };
    case ANALYZE_SONG:
      return { ...state,
            emotion: action.payload.emotion,
            sentiment: action.payload.sentiment,
          };
    case LYRICS_ERROR:
      return { ...state,
            error: action.payload,
            };
    default:
      return state;
  }
}
