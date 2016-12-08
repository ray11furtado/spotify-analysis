import {
  GUEST_LOGIN,
  GUEST_LOGOUT,
  GUEST_SEARCH,
} from '../actions/types';

const INITIAL_STATE = { login: false, count: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GUEST_LOGIN:
      return { ...state, login: action.payload };
    case GUEST_LOGOUT: {
      return { ...state, login: action.payload };
    }
    case GUEST_SEARCH: {
      return { ...state, count: action.payload };
    }
    default: return state;
  }
}
