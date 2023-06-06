import * as types from "../type/jobPostType";

export const jobSaveRequest = (jobData) => {
  console.log("in action",jobData);
  return{
    type: types.JOB_SAVE_REQUEST,
    payload: jobData,
  };
    
};
  

export const jobSaveSuccess = (data) => ({
  type: types.JOB_SAVE_SUCCESS,
  payload: data,
});
  
export const jobSaveFailure = (error) => ({
  type: types.JOB_SAVE_FAILURE,
  payload: error,
});