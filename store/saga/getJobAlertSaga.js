import { call, put, takeLatest } from "redux-saga/effects";
import {
  JOB_ALERT_REQUEST,
  JOB_ALERT_SUCCESS,
  JOB_ALERT_FAILURE,
} from "../type/jobAlertType";
import { makeApiRequest } from "../../utils/api";

function* JobDataAlert(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/job-alert",
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
        "Content-Type": "application/json",
      },
    });
    yield put({ type:JOB_ALERT_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: JOB_ALERT_FAILURE, payload: error });
  }
}

export default function* watchJobAlert() {
  yield takeLatest( JOB_ALERT_REQUEST,JobDataAlert);
}

