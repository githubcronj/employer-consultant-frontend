import * as types from "../type/editJobAlertType";
const initialState = {
  data: null,
  error: null,
};

const editJobAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_JOB_ALERT_SUCCESS_RESPONSE:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case types.EDIT_JOB_ALERT_FAILURE_RESPONSE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editJobAlertReducer;
