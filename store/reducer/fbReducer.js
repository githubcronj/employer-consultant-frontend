import * as types from "../type/fbType";

const INITIAL_STATE = {
  CurrentUser: null,
  isLoggedIn: false,
  isLoggedOut: false,
};
export function facebookReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.FACEBOOK_LOGIN_SUCCESS:
    return {
      ...state,
      data: action.payload,
      isLoggedIn: true,
      isLoggedOut: false,
    };

  default:
    return state;
  }
}
