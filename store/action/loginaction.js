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
export function logout() {
  return {
    type:types.LOGOUT,
  }
}