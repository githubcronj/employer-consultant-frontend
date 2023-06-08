import * as types from "../type/jobPostType";

export const jobSaveRequest = (jobData,accessToken) => {
    console.log('in action',jobData,accessToken)
    return{
    type: types.JOB_SAVE_REQUEST,
    payload: {jobData,accessToken}
    
}
    
  };
  

  export const jobSaveSuccess = (data) => ({
    type: types.JOB_SAVE_SUCCESS,
    payload: data,
  });
  
  export const jobSaveFailure = (error) => ({
    type: types.JOB_SAVE_FAILURE,
    payload: error,
  });