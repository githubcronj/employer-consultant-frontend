import * as types from "../type/generateSkillsType";

export const generateSkillsSaveRequest = (jobFields, accessToken) => {
    console.log('in action',jobFields)
    return{
    type: types.GENERATE_SKILLS_SAVE_REQUEST,
    payload: {jobFields, accessToken}     
}
    
  };
  

  export const generateSkillsSuccess = (data) => ({
    type: types.GENERATE_SKILLS_SAVE_SUCCESS,
    payload: data,
  });
  
  export const generateSkillsFailure = (error) => ({
    type: types.GENERATE_SKILLS_SAVE_FAILURE,
    payload: error,
  });