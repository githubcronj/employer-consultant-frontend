import * as types from "../type/forgotPasswordtype";
export function forgotPassword(payload) {
    return {
      type: types.FORGOT_PASSWORD,
      payload: payload,
    };
  }
  
  export function forgotPasswordSucces(payload) {
    return {
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload: {
        token: response.token.accessToken,
      },
    };
  }
  
  export function forgotPasswordError(error) {
    return {
      type: types.FORGOT_PASSWORD_ERROR,
      payload: error,
    };
  }

  export function resetPassword(payload) {
    return {
      type: types.RESET_PASSWORD,
      payload: payload,
    };
  }
  
  export function resetPasswordSucces(data) {
    return {
      type: types.RESET_PASSWORD_SUCCESS,
      payload: data,
    };
  }
  
  export function resetPasswordError(error) {
    return {
      type: types.RESET_PASSWORD_ERROR,
      payload: error,
    };
  }