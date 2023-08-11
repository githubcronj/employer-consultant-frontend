import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  ADD_SELECT_CONSULTANT_FAILURE,
  ADD_SELECT_CONSULTANT_REQUEST,
  ADD_SELECT_CONSULTANT_SUCCESS,
  FETCH_SELECTED_CONSULTANT_FAILURE,
  FETCH_SELECTED_CONSULTANT_REQUEST,
  FETCH_SELECTED_CONSULTANT_SUCCESS,
  REJECT_SELECT_CONSULTANT_FAILURE,
  REJECT_SELECT_CONSULTANT_REQUEST,
  REJECT_SELECT_CONSULTANT_SUCCESS,
} from "store/type/selectTypes.js";
import {
  addintoselectFailure,
  addintoselectRequest,
  addintoselectSuccess,
  fetchselectedconsultantRequest,
  fetchselectedconsultantSuccess,
  fetchselectedconsultantfailure,
  rejectselectedconsultantRequest,
  rejectselectedconsultantSuccess,
  rejectselectedconsultantfailure,
} from "store/action/selectConsultantAction.js";
import { toast } from "react-toastify";

function* selectedConsultantSaga(action) {
  try {
    const { payload } = action;
    console.log(action.payload, "action sheduled");

    const response = yield call(makeApiRequest, {
      endpoint: "/schedule-list",
      method: "POST",
      headers: {
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
      data: {
        jobId: action.payload.jobId,
        consultantId: action.payload.consultantId,
        scheduledDate: action.payload.scheduledDate,
      },
    });

    yield put(addintoselectSuccess(response));
    toast.success("User Added into Scheduled List");
  } catch (error) {
    yield put(addintoselectFailure(error.message));
  }
}

function* fetchSelectedConsultantSaga(action) {
  try {
    console.log(action.payload, "action saga");
    const { payload } = action;
    const { accessToken, search, id } = payload;
    const jobId = action.payload;

    console.log(action, "seacech");
    console.log(jobId, "jobID");
    const response = yield call(makeApiRequest, {
      endpoint: `/schedule-list?jobId=${jobId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.accessToken}`,
      },
    });
    yield put(fetchselectedconsultantSuccess(response));
  } catch (error) {
    yield put(fetchselectedconsultantfailure(error.message));
  }
}

export function* watchselectedConsultantSaga() {
  yield takeLatest(ADD_SELECT_CONSULTANT_REQUEST, selectedConsultantSaga);
  //   yield takeLatest(
  //   FETCH_SELECTED_CONSULTANT_REQUEST,
  //     fetchSelectedConsultantSaga
  //   );
}
