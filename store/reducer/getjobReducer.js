import * as types from "../type/getjobType";

const INITIAL_STATE = {
  CurrentUser: null,
};

export function getjobReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
  case types.GET_JOB_SUCCESS:
    return {
      ...state,
      CurrentUser: action.payload,
      isLoggedIn: true,
      isLoggedOut: false,
    };
  case types.GET_JOB_ERROR:
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
