import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import {
  SAVE_FAILURE,
  SAVE_JOB_SUCCESS,
  SAVE_SUCCESS,
  UNSAVE_JOB_FAILURE,
  UNSAVE_JOB_REQUEST,
  UNSAVE_JOB_SUCCESS,
} from "store/type/applyJobType";
import { toast } from "react-toastify";

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
    toast.success("Job saved successful");
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: SAVE_FAILURE, payload: error });
    toast.error(error.message);
  }
}

function* unsaveJobData(action) {
  console.log(action.payload.jobId, " unsave jobID");
  console.log(action.payload.finaltoken, "token");
  try {
    const response = yield call(makeApiRequest, {
      endpoint: `/remove-save-job?jobId=${action.payload.jobId}`,
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${action.payload.finaltoken}`,
        "Content-Type": "application/json",
      },
    });

    yield put({ type: UNSAVE_JOB_SUCCESS, payload: response.data });
    toast.success("Job removed successfull");
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: UNSAVE_JOB_FAILURE, payload: error });
    toast.error(error.message);
  }
}

export default function* watchSaveJob() {
  yield takeLatest(SAVE_JOB_SUCCESS, saveJobData);
  yield takeLatest(UNSAVE_JOB_REQUEST, unsaveJobData);
}
