import * as types from "../type/facebookType";

export function facebookLogin(payload) {
  return {
    type: types.FACEBOOK_REQUEST,
    payload: payload,
  };
}

export function facebookLoginSuccess(payload) {
  return {
    type: types.FACEBOOK_SUCCESS,
    payload: payload,
  };
}

export function facebookLoginError(error) {
  return {
    type: types.FACEBOOK_ERROR,
    payload: error,
  };
}
