import * as types from "../type/jobAlertType";
const initialState = {
  data: [],
  error: null,
};
const JobAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.JOB_ALERT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case types.JOB_ALERT_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default JobAlertReducer;
