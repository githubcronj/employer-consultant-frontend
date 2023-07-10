import * as types from "../type/visitJobType";

export function visitJobProfile(payload) {
  return {
    type: types.VISIT_JOB_PROFILE,
    payload: payload,
  };
}
export function visitJobProfileSuccess(payload) {
  return {
    type: types.VISIT_JOB_PROFILE_SUCCESS,
    payload: payload,
  };
}
export function visitJobProfileFailure(payload) {
  return {
    type: types.VISIT_JOB_PROFILE_FAILURE,
    payload: payload,
  };
}
