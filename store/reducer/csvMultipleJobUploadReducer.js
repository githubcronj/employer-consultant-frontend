import * as types from '../type/csvMultipleJobUploadType';
const initialState = {
    data: null,
    error: null,
  };
  
  const csvUploadReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.CSV_SAVE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case types.CSV_SAVE_FAILURE:
        return {
          ...state,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default csvUploadReducer;