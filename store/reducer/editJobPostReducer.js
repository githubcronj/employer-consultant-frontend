import * as types from "../type/editJobPostType";

export const initialState = {
//   formData: {
//     jobTitle: "",
//     experience: "",
//     deadline: "",
//     jobType: "",
//     minSalary: "",
//     maxSalary: "",
//     description: "",
//     email: "",
//     phoneNumber: "",
//   },
  formData: [],
  data: []
};

const editJobReducer = (state = initialState, action) => {

  switch (action.type) {
    
  case types.SET_JOB_FORM_DATA:
      
    return {
      ...state,
      formData: action.payload,
    };
  case types.SET_JOB_FORM_SUCCESS:
    
    return{
      ...state,
      data: action.payload,
    };
  case types.JOB_EDIT_SUCCESS:
    
    return{
      ...state,
      data: action.payload,
    };
  default:
    return state;
  }
};


export default editJobReducer;