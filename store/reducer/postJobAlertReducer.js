import * as types from '../type/postJobAlterType';
const initialState = {
    data: null,
    error: null,
  };
  
  const PostJobAlertReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.POST_JOB_ALERT_SUCCESS_RESPONSE:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case types.POST_JOB_ALERT_FAILURE_RESPONSE:
        return {
          ...state,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default PostJobAlertReducer;