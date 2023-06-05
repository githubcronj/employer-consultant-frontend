import * as types from "../type/deletejobType";

const INITIAL_STATE = {
  CurrentUser: null,
};

export function deletejobReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case types.DELETE_JOB_SUCCESS:
      return {
        ...state,
        CurrentUser: action.payload,
        isLoggedIn: true,
        isLoggedOut: false,
      };
    case types.DELETE_JOB_ERROR:
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
