import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import userInfo from './userinfo_reducer';
import searched from './searched_content_reducer';
import singleSong from './single_song_analysis_reducer';

const rootReducer = combineReducers({
	authenticated: authenticationReducer,
	user: userInfo,
	search: searched,
	singleSongAnalysis: singleSong,
});

export default rootReducer;
