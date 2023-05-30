import * as types from '../type/profileActionType';
const initialState = {
    data: [],
    error: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.PROFILE_SAVE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          error: null,
        };
      case types.PROFILE_SAVE_FAILURE:
        return {
          ...state,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;