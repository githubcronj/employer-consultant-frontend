import * as types from "../type/generateResponseType";

export const generateResponseSaveRequest = (jobFields, accessToken) => {
    console.log('in action',jobFields)
    return{
    type: types.GENERATE_RESPONSE_SAVE_REQUEST,
    payload: {jobFields, accessToken}     
}
    
  };
  

  export const generateResponseSuccess = (data) => ({
    type: types.GENERATE_RESPONSE_SAVE_SUCCESS,
    payload: data,
  });
  
  export const generateResponseFailure = (error) => ({
    type: types.GENERATE_RESPONSE_SAVE_FAILURE,
    payload: error,
  });