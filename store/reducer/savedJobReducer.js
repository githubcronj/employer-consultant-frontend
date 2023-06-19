import * as types from "../type/savedJobType";
const initialState = {
  data: [],
  error: null,
};
const savedJobReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.SAVED_JOB_SUCCESS:
       
      return {
        ...state,
        data: action.payload,
        error: null,
      };
      
    case types.SAVED_JOB_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default savedJobReducer;
