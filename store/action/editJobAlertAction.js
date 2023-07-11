import * as types from "../type/editJobAlertType";

export function editJobAlertSuccess(payload) {
    return {
      type: types.EDIT_JOB_ALERT_SUCCESS,
      payload: payload,
    };
  }
  
  export function editJobAlertError(error) {
    return {
      type: types.EDIT_JOB_ALERT_FAILURE,
      payload: error,
    };
  }