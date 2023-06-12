import * as types from "../type/recommandedJobtype";

  export function fetchJobsRequest(payload,accessToken) {
    return {
      type: types.FETCH_JOBS_REQUEST,
      payload: {
        data: payload,
        token: accessToken,
      },
  
    };
    
  }
  
  export function fetchJobsSuccess(payload) {
    return {
      type: types.FETCH_JOBS_SUCCESS,
      payload: payload,
    };
  }
  
  export function fetchJobsFailure(payload) {
    return {
      type: types.FETCH_JOBS_FAILURE,
      payload: payload,
    };
  }