//Google Login
import * as types from "../type/googleLoginType";

export function googleLogin() {
  return {
    type: types.GOOGLE_LOGIN,
      
  };
}
  
export function googleLoginSuccess(data) {
  return {
    type: types.GOOGLE_LOGIN_SUCCESS,
    payload: data,
     
  };
}
  
export function googleLoginError(error) {
  return {
    type: types.GOOGLE_LOGIN_ERROR,
    payload: error,
  };
}

  
export const googleLoginRedirectAction = () => ({
  type: GOOGLE_LOGIN_REDIRECT,
});