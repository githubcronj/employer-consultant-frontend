import * as types from "../type/profileActionType";

export const profileSaveRequest = (profileData) => {
    console.log('in action',profileData)
    return{
    type: types.PROFILE_SAVE_REQUEST,
    payload: profileData,
}
    
  };
  

  export const profileSaveSuccess = (data) => ({
    type: types.PROFILE_SAVE_SUCCESS,
    payload: data,
  });
  
  export const profileSaveFailure = (error) => ({
    type: types.PROFILE_SAVE_FAILURE,
    payload: error,
  });