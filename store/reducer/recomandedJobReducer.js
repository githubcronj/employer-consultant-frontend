
import * as types from "../type/recommandedJobtype";
const INITIAL_STATE = {
  isjobData: false,
  GetjobData: [],
};

export function jobsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  
    case types.FETCH_JOBS_REQUEST:
      return {
        ...state,
        isjobData: false,
      };

    case types.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        GetjobData: action.payload.data,
        isjobData: true,
      };

    case types.FETCH_JOBS_FAILURE:
      return {
        ...state,
        isjobData: false,
      };
  
    default:
      return state;
  }
}


  