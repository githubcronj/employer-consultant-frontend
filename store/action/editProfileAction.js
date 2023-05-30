import * as types from "../type/editProfileType";

export const fetchFormData = () => ({
    type: types.FETCH_FORM_DATA,
  });
  
  export const setFormData = (formData) => ({
    type: types.SET_FORM_DATA,
    // payload: formData,
  });
  
