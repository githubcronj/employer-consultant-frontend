import * as types from "../type/editJobPostType";

export const fetchJobFormData = () => ({
    type: types.FETCH_JOB_FORM_DATA,
  });
  
  export const submitJobFormData = (formData,accessToken,id) => ({
    type: types.SUBMIT_JOB_FORM_DATA,
    payload : formData,
    accessToken:accessToken,
    id: id,
    
  });

  
  export const setJobFormData = () => ({
    type: types.SET_JOB_FORM_DATA,
    // payload: formData,
  });
  