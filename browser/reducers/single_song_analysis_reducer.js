import {
  ANALYZE_SONG,
} from '../actions/types';

const INITIAL_STATE = { title: null, artist: null, lyrics: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ANALYZE_SONG:
    return { ...state,
            title: action.payload.songName,
            artist: action.payload.artist,
            lyrics: action.payload.lyrics,
          };
    default:
      return state;
  }
}
