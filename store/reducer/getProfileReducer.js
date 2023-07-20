import * as types from "../type/getProfileType";

const INITIAL_STATE = {
  CurrentUser: null,
  isCurrentUser: true,
};

export function getProfileReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.PROFILE_REQUEST:
      return {
        ...state,
        isCurrentUser: true,
      };
    case types.PROFILE_SUCCESS:
      return {
        ...state,
        CurrentUser: action.payload.response,
        isCurrentUser: false,
      };
    case types.PROFILE_ERROR:
      return {
        ...state,
        CurrentUser: null,
        isCurrentUser: true,
      };

    default:
      return state;
  }
}
