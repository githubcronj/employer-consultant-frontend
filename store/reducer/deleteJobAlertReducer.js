import * as types from "../type/deleteJobAlertType";
const initialState = {
  data: null,
  error: null,
};

const DeleteJobAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_JOB_ALERT_SUCCESS_RESPONSE:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case types.DELETE_JOB_ALERT_FAILURE_RESPONSE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default DeleteJobAlertReducer;
