import * as types from '../type/generateResponseType';
const initialState = {
    data: null,
    error: null,
  };
  
  const generateResponseReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GENERATE_RESPONSE_SAVE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case types.GENERATE_RESPONSE_SAVE_FAILURE:
        return {
          ...state,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default generateResponseReducer;