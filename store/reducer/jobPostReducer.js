import * as types from '../type/jobPostType';
const initialState = {
    data: null,
    error: null,
  };
  
  const jobPostReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.JOB_SAVE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case types.JOB_SAVE_FAILURE:
        return {
          ...state,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobPostReducer;