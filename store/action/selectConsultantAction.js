import * as types from "../type/selectTypes";

export function addintoselectRequest(payload) {
  console.log(payload, "action for selected");
  return {
    type: types.ADD_SELECT_CONSULTANT_REQUEST,
    payload: payload,
  };
}
export function addintoselectSuccess(payload) {
  return {
    type: types.ADD_SELECT_CONSULTANT_SUCCESS,
    payload: {
      payload: payload,
    },
  };
}

export function addintoselectFailure(payload) {
  return {
    type: types.ADD_SELECT_CONSULTANT_FAILURE,
    payload: payload,
  };
}

export function fetchselectedconsultantRequest(payload) {
  return {
    type: types.FETCH_SELECTED_CONSULTANT_REQUEST,
    payload: payload,
  };
}
export function fetchselectedconsultantSuccess(payload) {
  return {
    type: types.FETCH_SELECTED_CONSULTANT_SUCCESS,
    payload: payload,
  };
}
export function fetchselectedconsultantfailure(errors) {
  return {
    type: types.FETCH_SELECTED_CONSULTANT_FAILURE,
    errors: errors,
  };
}
export function rejectselectedconsultantRequest(payload) {
  return {
    type: types.REJECT_SELECT_CONSULTANT_REQUEST,
    payload: payload,
  };
}
export function rejectselectedconsultantSuccess(payload) {
  return {
    type: types.REJECT_SELECT_CONSULTANT_SUCCESS,
    payload: payload,
  };
}
export function rejectselectedconsultantfailure(errors) {
  return {
    type: types.REJECT_SELECT_CONSULTANT_FAILURE,
    errors: errors,
  };
}
