import * as types from "../type/viewProfileType";

export function viewProfileRequest(payload) {
  return {
    type: types.GET_PROFILE_REQUEST,
    payload: payload,
  };
}
export function viewProfileSuccess(payload) {
  return {
    type: types.GET_PROFILE_SUCCESS,
    payload: payload,
  };
}
export function viewProfileFailure(payload) {
  return {
    type: types.GET_PROFILE_FAILURE,
    payload: payload,
  };
}
