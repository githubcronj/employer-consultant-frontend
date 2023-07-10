import * as types from "../type/visitJobType";

const initialState = {
  data: [],
  error: null,
};

const visitJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VISIT_JOB_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case types.VISIT_JOB_PROFILE_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default visitJobReducer;
