import * as types from "../type/deleteJobAlertType";

export function deleteJobAlertSuccess(payload) {
    return {
      type: types.DELETE_JOB_ALERT_SUCCESS,
      payload: payload,
    };
  }
  
  export function deleteJobAlertError(error) {
    return {
      type: types.DELETE_JOB_ALERT_FAILURE,
      payload: error,
    };
  }