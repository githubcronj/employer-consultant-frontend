import * as types from "../type/editProfileType";

export const fetchFormData = () => ({
  type: types.FETCH_FORM_DATA,
});
  
export const submitFormData = (formData,accessToken) => ({
  type: types.SUBMIT_FORM_DATA,
  payload : formData,
  accessToken:accessToken
    
});
  
export const setFormData = () => ({
  type: types.SET_FORM_DATA,
  // payload: formData,
});
  
