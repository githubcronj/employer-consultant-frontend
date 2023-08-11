import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import {
  APPLY_JOB_SUCCESS,
  JOB_FAILURE,
  JOB_SUCCESS,
} from "store/type/applyJobType";
import { toast } from "react-toastify";

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
    toast.success("Job applied successful", {
      autoClose: 3000,
    });
  } catch (error) {
    yield put({ type: JOB_FAILURE, payload: error });
    toast.error(error, {
      autoClose: 3000,
    });
  }
}

export default function* watchApplyJob() {
  yield takeLatest(APPLY_JOB_SUCCESS, applyJobData);
}
