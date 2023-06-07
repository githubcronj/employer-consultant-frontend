import * as types from "../type/csvMultipleJobUploadType";

export const csvSaveRequest = (csvData, accessToken) => {
    console.log('in action',csvData);
    
    return{
    type: types.CSV_SAVE_REQUEST,
    payload: {csvData, accessToken}
}
    
  };
  

  export const csvSaveSuccess = (data) => ({
    type: types.CSV_SAVE_SUCCESS,
    payload: data,
  });
  
  export const csvSaveFailure = (error) => ({
    type: types.CSV_SAVE_FAILURE,
    payload: error,
  });