import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { APPLIED_FAILURE, APPLIED_JOB_SUCCESS, APPLIED_SUCCESS,} from "store/type/applyJobType";

function* appliedJobData(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/fetch-applied-jobs",
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.payload}`,
        "Content-Type": "application/json",
      },
    });
    yield put({ type: APPLIED_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: APPLIED_FAILURE, payload: error });
  }
}

export default function* watchAppliedJob() {
  yield takeLatest(APPLIED_JOB_SUCCESS, appliedJobData);
}

