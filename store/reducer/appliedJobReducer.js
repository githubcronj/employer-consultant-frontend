import * as types from "../type/applyJobType";
const initialState = {
  data: [],
  error: null,
};
const appliedJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APPLIED_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case types.APPLIED_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default appliedJobReducer;
