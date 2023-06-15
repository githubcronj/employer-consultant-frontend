import * as types from "../type/deletejobType";

export const deleteJobRequest = (payload, onSuccess) => ({
    type: types.DELETE_JOB_REQUEST,
    payload,
    onSuccess,
  });
  
  export const deleteJobSuccess = (payload) => ({
    type: types.DELETE_JOB_SUCCESS,
    payload,
  });
  
  export const deleteJobFailure = (error) => ({
    type: types.DELETE_JOB_FAILURE,
    payload: error,
  });
  
