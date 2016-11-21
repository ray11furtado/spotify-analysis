import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import userInfo from './userinfo_reducer';
import searched from './searched_content_reducer';

const rootReducer = combineReducers({
	authenticated: authenticationReducer,
	user: userInfo,
	search: searched,
});

export default rootReducer;

