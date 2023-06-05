import {RESUME_DATA} from "../type/resumeDataFillingType";
  
  const initialState = {
    resumeData: [],
  };
  
  const resumeDataFillingReducer = (state = initialState, action) => {
    switch (action.type) {
      case RESUME_DATA:
        return {
          ...state,
          resumeData:action.payload
        };
     
      default:
        return state;
    }
  };
  
  export default resumeDataFillingReducer;