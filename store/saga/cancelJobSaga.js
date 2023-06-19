import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";
import {
  CANCEL_FAILURE,
  CANCEL_JOB_SUCCESS,
  CANCEL_SUCCESS,
} from "store/type/applyJobType";

function* cancelJobData(action) {
    console.log(action,'cancelaction')
  try {
    const payload = {
      jobId: action.payload.jobId,
    };

    const response = yield call(makeApiRequest, {
      endpoint: "/remove-applied-jobs",
      method: "DELETE",
      data: payload,
      headers: {
        Authorization: `Bearer ${action.payload.finaltoken}`,
        "Content-Type": "application/json",
      },
    });

    yield put({ type: CANCEL_SUCCESS, payload: response.data });
    toast.success("Job cancelled successfully");
    console.log("test in saga", response.data);

  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: CANCEL_FAILURE, payload: error });
  }
}

export default function* watchcancelJob() {
  yield takeLatest(CANCEL_JOB_SUCCESS, cancelJobData);
}
