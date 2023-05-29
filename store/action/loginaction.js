import * as types from "../type/logintype";

export function login(payload) {
  return {
    type: types.LOGIN,
    payload: payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: payload,
  };
}

export function loginError(payload) {
  return {
    type: types.LOGIN_ERROR,
    payload: payload,
  };
}
//Google Login

export function googleLogin(payload) {
  return {
    type: types.GOOGLE_LOGIN,
    payload: payload,
  };
}

export function googleLoginSuccess(payload) {
  return {
    type: types.GOOGLE_LOGIN_SUCCESS,
    payload: payload,
  };
}

export function googleLoginError(error) {
  return {
    type: types.GOOGLE_LOGIN_ERROR,
    payload: error,
  };
}
