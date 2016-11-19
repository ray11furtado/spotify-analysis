import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import userInfo from './userinfo_reducer';

const rootReducer = combineReducers({
	authenticated: authenticationReducer,
	user: userInfo,
});

export default rootReducer;

