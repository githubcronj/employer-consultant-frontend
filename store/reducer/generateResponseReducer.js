import * as types from '../type/generateResponseType';
const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const generateResponseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GENERATE_RESPONSE_SAVE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case types.GENERATE_RESPONSE_SAVE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case types.GENERATE_RESPONSE_SAVE_FAILURE:
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default generateResponseReducer;