// import * as types from "../type/setupDetailsType";
import * as types from "../type/EditConsultanProfileType";

const INITIAL_STATE = {
  CurrentUser: null,
  isCurrentJob: false,
};

export function editProfileResume(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.EDIT_CONSULTANT_REQUEST_REDUCER:
      return {
        ...state,
        CurrentUser: action.payload.data,
        isCurrentJob: true,
      };
    case types.EDIT_CONSULTANT_SUCCESS_REDUCER:
      return {
        ...state,
        CurrentUser: action.payload.data,
        isCurrentJob: false,
      };
    case types.EDIT_CONSULTANT_FAILURE_REDUCER:
      return {
        ...state,
        CurrentUser: null,
        isCurrentJob: false,
      };

    default:
      return state;
  }
}
