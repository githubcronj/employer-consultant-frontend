import * as types from "../type/jobAlertType";

export const jobAlertRequest = (Data) => {
  return {
    type: types.JOB_ALERT_REQUEST,
    payload: Data,
  };
};

// export const jobAlertSuccess = (data) => ({
//   type: types.JOB_ALERT_SUCCESS,
//   payload: data,
// });

// export const jobAlertFailure = (error) => ({
//   type: types.JOB_ALERT_FAILURE,
//   payload: error,
// });
