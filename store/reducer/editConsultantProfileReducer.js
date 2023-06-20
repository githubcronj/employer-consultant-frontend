import * as types from "../type/setupDetailsType";

const INITIAL_STATE = {
  CurrentUser: null,
};

export function editProfileResume(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.EDIT_CONSULTANT_SUCCESS_REDUCER:
      return {
        ...state,
        CurrentUser: action.payload.data,
        isLoggedIn: true,
        isLoggedOut: false,
      };
    case types.EDIT_CONSULTANT_FAILURE_REDUCER:
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
