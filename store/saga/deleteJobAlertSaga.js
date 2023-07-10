import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";
import { DELETE_JOB_ALERT_FAILURE_RESPONSE, DELETE_JOB_ALERT_SUCCESS, DELETE_JOB_ALERT_SUCCESS_RESPONSE } from "store/type/deleteJobAlertType";

function* deleteJobAlertData(action) {
  try {
    
console.log(action,"in alter saga")
    const response = yield call(makeApiRequest, {
      endpoint: `/job-alert/${action.payload.UserId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
        "Content-Type": "application/json",
      },
    });

    yield put({ type: DELETE_JOB_ALERT_SUCCESS_RESPONSE, payload: response.data });
    toast.success("Job delete successfully");

  } catch (error) {
    yield put({ type: DELETE_JOB_ALERT_FAILURE_RESPONSE, payload: error });
  }
}

export default function* watchdeleteJobAlert() {
  yield takeLatest(DELETE_JOB_ALERT_SUCCESS, deleteJobAlertData);
}
