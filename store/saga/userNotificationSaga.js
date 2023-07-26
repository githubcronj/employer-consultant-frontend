import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";
import * as types from "../type/userNotificationType.js";

function* userNotificationData(action) {
  try {
    const payload = {
      jobId: action.payload.jobId,
    };
    console.log(action, "userNotificationData");
    const response = yield call(makeApiRequest, {
      endpoint: "/my-notification",
      method: "GET",
      //   data: payload,
      headers: {
        Authorization: `Bearer ${action.payload}`,
        "Content-Type": "application/json",
      },
    });
    yield put({
      type: types.USER_NOTIFICATION_TYPE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: types.USER_NOTIFICATION_TYPE_FAILURE, payload: error });
  }
}
export default function* watchUserNotification() {
  yield takeLatest(types.USER_NOTIFICATION_TYPE, userNotificationData);
}
