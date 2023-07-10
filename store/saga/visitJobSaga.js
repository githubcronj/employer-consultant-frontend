import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";
import {
  VISIT_JOB_PROFILE,
  VISIT_JOB_PROFILE_SUCCESS,
  VISIT_JOB_PROFILE_FAILURE,
} from "../type/visitJobType";

function* visitJobData(action) {
  try {
    const payload = {
      jobId: action.payload.jobId,
    };
    console.log(action, "vistjobapi");
    const response = yield call(makeApiRequest, {
      endpoint: "/visit-job",
      method: "POST",
      data: payload,
      headers: {
        Authorization: `Bearer ${action.payload.finaltoken}`,
        "Content-Type": "application/json",
      },
    });
    yield put({ type: VISIT_JOB_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: VISIT_JOB_PROFILE_FAILURE, payload: error });
  }
}
export default function* watchVisitJob() {
  yield takeLatest(VISIT_JOB_PROFILE, visitJobData);
}
