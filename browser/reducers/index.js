import { combineReducers } from 'redux';
import userInfo from './userinfo_reducer';
import searched from './searched_content_reducer';
import singleSong from './single_song_analysis_reducer';
import guestInfo from './guest_reducer';

const rootReducer = combineReducers({
	user: userInfo,
	search: searched,
	singleSongAnalysis: singleSong,
	guest: guestInfo,
});

export default rootReducer;
