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