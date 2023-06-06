import * as types from "../type/getProfileType";

const INITIAL_STATE = {
  CurrentUser: null,
};

export function getProfileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.PROFILE_SUCCESS:
    return {
      ...state,
      CurrentUser: action.payload.response,
      isLoggedIn: true,
      isLoggedOut: false,
    };
  case types.PROFILE_ERROR:
    return {
      ...state,
      CurrentUser: null,
      isLoggedIn: false,
      isLoggedOut: false,
    };

  default:
    return state;
  }
}
