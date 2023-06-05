import * as types from "../type/viewProfileType";

const INITIAL_STATE = {
  CurrentUser: null,
};

export function viewProfileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        CurrentUser: action.payload.data,
        isLoggedIn: true,
        isLoggedOut: false,
      };
    case types.GET_PROFILE_ERROR:
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
