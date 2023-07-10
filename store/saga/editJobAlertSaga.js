import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";
import {
  EDIT_JOB_ALERT_FAILURE_RESPONSE,
  EDIT_JOB_ALERT_SUCCESS,
  EDIT_JOB_ALERT_SUCCESS_RESPONSE,
} from "store/type/editJobAlertType";

function* editJobAlertData(action) {
  const data1 = {
    jobName: action.payload.data.jobName,
    location: action.payload.data.location,
    jobType: action.payload.data.jobType,
    experience: action.payload.data.experience,
    salary: action.payload.data.salary,
    minSalary: action.payload.data.minSalary,
    maxSalary: action.payload.data.maxSalary,
    alertFrequency: action.payload.data.alertFrequency,
    notificationSettings: action.payload.data.notificationSettings,
  };
  try {
    const response = yield call(makeApiRequest, {
      endpoint: `/job-alert/${action.payload.data._id}`,
      method: "PUT",
      data: data1,
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
        "Content-Type": "application/json",
      },
    });

    yield put({
      type: EDIT_JOB_ALERT_SUCCESS_RESPONSE,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: EDIT_JOB_ALERT_FAILURE_RESPONSE, payload: error });
  }
}

export default function* watcheditJobAlert() {
  yield takeLatest(EDIT_JOB_ALERT_SUCCESS, editJobAlertData);
}
