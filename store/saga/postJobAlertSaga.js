import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { POST_JOB_ALERT_FAILURE_RESPONSE, POST_JOB_ALERT_SUCCESS, POST_JOB_ALERT_SUCCESS_RESPONSE } from "store/type/postJobAlterType";

function* PostJobDataAlert(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/job-alert",
      method: "POST",
      data: action.payload.data,
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
        "Content-Type": "application/json",
      },
    });
    yield put({ type:POST_JOB_ALERT_SUCCESS_RESPONSE, payload: response.data });
  } catch (error) {
    yield put({ type: POST_JOB_ALERT_FAILURE_RESPONSE, payload: error });
  }
}

export default function* watchPostJobAlert() {
  yield takeLatest( POST_JOB_ALERT_SUCCESS,PostJobDataAlert);

}

