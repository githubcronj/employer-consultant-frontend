import * as types from "../type/changePasword";
export function changePassword(payload) {
  return {
    type: types.CHANGE_PASSWORD,
    payload: payload,
  };
}
  
export function changePasswordSucces(payload) {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS,
    payload: payload,
  };
}
  
export function changePasswordError(error) {
  return {
    type: types.CHANGE_PASSWORD_ERROR,
    payload: error,
  };
}