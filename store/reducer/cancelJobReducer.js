import * as types from "../type/applyJobType";
const initialState = {
  data: null,
  error: null,
};

const cancelJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CANCEL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case types.CANCEL_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cancelJobReducer;
