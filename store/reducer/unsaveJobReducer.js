import * as types from "../type/applyJobType";
const initialState = {
  data: [],
  error: null,
};
const unsavedJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UNSAVE_JOB_REQUEST:
      return {
        ...state,
        data:null,
        error:null
      }
    case types.UNSAVE_JOB_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
      
    case types.UNSAVE_JOB_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default unsavedJobReducer;
