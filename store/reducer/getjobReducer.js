import * as types from "../type/getjobType";

const INITIAL_STATE = {
  CurrentUser: null,
  selectedJob:null,
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
     case types.SELECT_CURRENT_JOB:
      return {
        ...state,
        selectedJob:action.payload,
      };


    default:
      return state;
  }
}
