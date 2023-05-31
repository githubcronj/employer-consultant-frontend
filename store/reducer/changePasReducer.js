import * as types from "../type/changePasword";

const INITIAL_STATE = {
  createPassword: false,
  isLoggedIn: false,
  isLoggedOut: false,
  token: null,
}

export function changePasswordReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
     
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        
        createPassword: true,
        
      };
    case types.CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isSignUp: false,
        createPassword: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
