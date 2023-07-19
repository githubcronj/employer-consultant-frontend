import * as types from "../type/viewProfileType";

const INITIAL_STATE = {
  CurrentUser: null,
  isCurrentUser: true,
};

export function viewProfileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        isCurrentUser: true,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        CurrentUser: action.payload.data,
        isCurrentUser: false,
      };
    case types.GET_PROFILE_ERROR:
      return {
        ...state,
        CurrentUser: null,
        isCurrentUser: false,
      };

    default:
      return state;
  }
}
