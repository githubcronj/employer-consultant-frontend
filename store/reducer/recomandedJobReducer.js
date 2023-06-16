import * as types from "../type/recommandedJobtype";
const INITIAL_STATE = {
  isjobData: false,
  GetjobData: [],

  getrecommandjob: [],
  isgetdata: false,
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
    // recommand data reducer
    case types.FETCH_RECOMMAND_JOBS:
      return {
        ...state,
        isgetdata: false,
      };

    case types.FETCH_RECOMMAND_JOBS_SUCCESS:
      return {
        ...state,
        getrecommandjob: action.payload.data,
        isgetdata: true,
      };

    case types.FETCH_RECOMMAND_JOBS_FAILURE:
      return {
        ...state,
        isgetdata: false,
      };

    default:
      return state;
  }
}
