import * as types from "../type/logintype";
const INITIAL_STATE = {
  CurrentUser: [],
  isLoggedIn: false,
 isLoggedOut:false
};

export function LoginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case types.LOGIN:
        let isLoggedIn = action.payload.status === 200 ? true : false;
        return {
          ...state,
          isLoggedIn: isLoggedIn,
        };
      case types.LOGIN_SUCCESS:
        let isLoggedIn1 = action.payload.status === 200 ? true : false;
        return {
          ...state,
          CurrentUser: action.payload.data,
          isLoggedIn: isLoggedIn1,
          isLoggedOut: false,
        };
  
      default:
        return state;
    }
  }