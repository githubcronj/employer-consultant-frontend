import * as types from '../type/setupDetailsType';
const initialState = {
    data: null,
    error: null,
  };
  
  const setupDetailsAction = (state = initialState, action) => {
    switch (action.type) {
      case types.RESUME_SUCCESS:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case types.RESUME_FAILURE:
        return {
          ...state,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;