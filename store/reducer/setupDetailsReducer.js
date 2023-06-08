import * as types from "../type/setupDetailsType";

const INITIAL_STATE = {
  CurrentUser: null,
};

export function setDetailsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.RESUME_SUCCESS:
      return {
        ...state,
        CurrentUser: action.payload.data,
        isLoggedIn: true,
        isLoggedOut: false,
      };
    case types.RESUME_FAILURE:
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
