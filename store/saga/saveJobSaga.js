import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import {  SAVE_FAILURE, SAVE_JOB_SUCCESS, SAVE_SUCCESS } from "store/type/applyJobType";

function* saveJobData(action) {
  try {
    const payload = {
      jobId: action.payload.jobId,
    };

    const response = yield call(makeApiRequest, {
      endpoint: "/save-job",
      method: "POST",
      data: payload,
      headers: {
        Authorization: `Bearer ${action.payload.finaltoken}`,
        "Content-Type": "application/json",
      },
    });

    yield put({ type: SAVE_SUCCESS, payload: response.data });
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: SAVE_FAILURE, payload: error });
  }
}

export default function* watchSaveJob() {
  yield takeLatest(SAVE_JOB_SUCCESS, saveJobData);
}
