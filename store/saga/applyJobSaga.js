import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { APPLY_JOB_SUCCESS, JOB_FAILURE, JOB_SUCCESS } from "store/type/applyJobType";

function* applyJobData(action) {
  try {
    const payload = {
      jobId: action.payload.jobId,
    };

    const response = yield call(makeApiRequest, {
      endpoint: "/apply-jobs",
      method: "POST",
      data: payload,
      headers: {
        Authorization: `Bearer ${action.payload.finaltoken}`,
        "Content-Type": "application/json",
      },
    });

    yield put({ type: JOB_SUCCESS, payload: response.data });
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: JOB_FAILURE, payload: error });
  }
}

export default function* watchApplyJob() {
  yield takeLatest(APPLY_JOB_SUCCESS, applyJobData);
}

