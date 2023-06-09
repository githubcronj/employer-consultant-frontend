import * as types from "../type/applyJobType";
const initialState = {
  data: null,
  error: null,
};

const applyJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.JOB_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case types.JOB_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default applyJobReducer;
