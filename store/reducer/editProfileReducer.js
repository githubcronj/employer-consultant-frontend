import * as types from '../type/editProfileType';

export const initialState = {
  formData: {
    companyName: "",
    industry: "",
    companyId: "",
    companyURL: "",
    email: "",
    companyDetail: "",
    companySize: "",
    founded: "",
    companyLocation: "",
  },
  data: []
};

 const editProfileReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case types.SET_FORM_DATA:
      
      return {
        ...state,
        formData: action.payload,
      };
    case types.SET_FORM_SUCCESS:
    
      return{
        ...state,
        data: action.payload,
      }
      case types.PROFILE_EDIT_SUCCESS:
    
      return{
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
};


export default editProfileReducer;