import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/deletejobType";
import {
  DELETE_JOB_FAILURE,
  DELETE_JOB_REQUEST,
  DELETE_JOB_SUCCESS,
} from "../type/deletejobType";
import { makeApiRequest } from "../../utils/api";

function* deleteJob(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: `/job/${action.payload.id.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
        Token: `Bearer ${action.payload.token}`,
      },
    });
    yield put({ type: DELETE_JOB_SUCCESS, payload: response });
    console.log("in saga", response?.status);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: DELETE_JOB_FAILURE, payload: error });
  }
}

export default function* watchdeleteJobRequest() {
  yield takeLatest(types.DELETE_JOB_REQUEST, deleteJob);
}
