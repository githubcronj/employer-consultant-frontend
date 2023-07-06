import * as types from "../type/applyJobType";

export function applyJobSuccess(payload) {
  return {
    type: types.APPLY_JOB_SUCCESS,
    payload: payload,
  };
}

export function applyJobError(error) {
  return {
    type: types.APPLY_JOB_FAILURE,
    payload: error,
  };
}

export function cancelJobSuccess(payload) {
  return {
    type: types.CANCEL_JOB_SUCCESS,
    payload: payload,
  };
}

export function cancelJobError(error) {
  return {
    type: types.CANCEL_JOB_FAILURE,
    payload: error,
  };
}

export function saveJobSuccess(payload) {
  return {
    type: types.SAVE_JOB_SUCCESS,
    payload: payload,
  };
}

export function saveJobError(error) {
  return {
    type: types.SAVE_JOB_FAILURE,
    payload: error,
  };
}
export function unsaveJobRequest(payload) {
  return {
    type: types.UNSAVE_JOB_REQUEST,
    payload: payload,
  };
}


export function unsaveJobSuccess(payload) {
  return {
    type: types.UNSAVE_JOB_SUCCESS,
    payload: payload,
  };
}

export function unsaveJobError(error) {
  return {
    type: types.UNSAVE_JOB_FAILURE,
    payload: error,
  };
}
export function appliedJobRequest(payload) {
  return {
    type: types.APPLIED_JOB_REQUEST,
    payload: payload,
  };
}

export function appliedJobSuccess(payload) {
  return {
    type: types.APPLIED_JOB_SUCCESS,
    payload: payload,
  };
}

