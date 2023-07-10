import * as types from "../type/recentJobType";
const INITIAL_STATE = {
  getRecentJob: [],
  isGetRecentJob: false,
};

export default function recentJobReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // recent job reducer
    case types.FETCH_RECENT_JOBS:
      return {
        ...state,
        isGetRecentJob: true,
      };

    case types.FETCH_RECENT_JOBS_SUCCESS:
      return {
        ...state,
        getRecentJob: action.payload.data,
        isGetRecentJob: false,
      };

    case types.FETCH_RECENT_JOBS_FAILURE:
      return {
        ...state,
        isGetRecentJob: true,
      };

    case types.DELETE_RECENT_JOBS:
      return {
        ...state,
        isGetRecentJob: true,
      };

    case types.DELETE_RECENT_JOBS_SUCCESS:
      return {
        ...state,
        getRecentJob: [],
        isGetRecentJob: false,
      };

    case types.DELETE_RECENT_JOBS_FAILURE:
      return {
        ...state,
        isGetRecentJob: true,
      };

    default:
      return state;
  }
}
