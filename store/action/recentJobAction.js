import * as types from "../type/recentJobType";

export function fetchRecentJobs(payload) {
  return {
    type: types.FETCH_RECENT_JOBS,
    payload: payload,
  };
}

export function fetchRecentSuccess(payload) {
  return {
    type: types.FETCH_RECENT_JOBS_SUCCESS,
    payload: payload,
  };
}

export function fetchRecentFailure(payload) {
  return {
    type: types.FETCH_RECENT_JOBS_FAILURE,
    payload: payload,
  };
}

export function deleteRecentJobs(payload) {
  return {
    type: types.DELETE_RECENT_JOBS,
    payload: payload,
  };
}

export function deleteRecentSuccess(payload) {
  return {
    type: types.DELETE_RECENT_JOBS_SUCCESS,
    payload: payload,
  };
}

export function deleteRecentFailure(payload) {
  return {
    type: types.DELETE_RECENT_JOBS_FAILURE,
    payload: payload,
  };
}
