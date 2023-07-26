import * as types from "../type/userNotificationType.js";

export function userNotification(payload) {
  return {
    type: types.USER_NOTIFICATION_TYPE,
    payload: payload,
  };
}
export function userNotificationSuccess(payload) {
  return {
    type: types.USER_NOTIFICATION_TYPE_SUCCESS,
    payload: payload,
  };
}
export function userNotificationFailure(payload) {
  return {
    type: types.USER_NOTIFICATION_TYPE_FAILURE,
    payload: payload,
  };
}
