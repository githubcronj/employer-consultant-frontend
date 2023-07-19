import * as types from "../type/EditConsultanProfileType";

export const EDIT_CONSULTANT_SUCCESS = "EDIT_CONSULTANT_SUCCESS";
export const EDIT_CONSULTANT_FAILURE = "EDIT_CONSULTANT_FAILURE";

export function EditConsultantRequest(payload) {
  console.log("action");
  return {
    type: types.EDIT_CONSULTANT_REQUEST_REDUCER,
    payload: payload,
  };
}

export function EditConsultantSuccess(payload) {
  console.log("action");
  return {
    type: types.EDIT_CONSULTANT_SUCCESS_REDUCER,
    payload: payload,
  };
}

export function EditConsultantError(error) {
  return {
    type: types.EDIT_CONSULTANT_FAILURE_REDUCER,
    payload: error,
  };
}
