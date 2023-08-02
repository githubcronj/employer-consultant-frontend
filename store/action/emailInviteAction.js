import * as types from "../type/emailInviteType";

export function emailInviteAction(payload) {
  return {
    type: types.EMAIL_INVITE,
    payload: payload,
  };
}
export function emailInviteActionSuccess(payload) {
  return {
    type: types.EMAIL_INVITE_SUCCESS,
    payload: payload,
  };
}
export function emailInviteActionFailure(payload) {
  return {
    type: types.EMAIL_INVITE_FAILURE,
    payload: payload,
  };
}
