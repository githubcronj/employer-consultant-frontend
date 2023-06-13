import * as types from '../type/generateSkillsType';
const initialState = {
    // loading: false,
    data: null,
    error: null,
  };
  
  const generateSkillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GENERATE_SKILLS_SAVE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case types.GENERATE_SKILLS_SAVE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case types.GENERATE_SKILLS_SAVE_FAILURE:
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default generateSkillsReducer;