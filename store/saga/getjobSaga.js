import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/getjobType";
import {
  GET_JOB_FAILURE,
  GET_JOB_REQUEST,
  GET_JOB_SUCCESS,
} from "../type/getjobType";
import { makeApiRequest } from "../../utils/api";

function* getJob(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/job",
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.payload}`,

        Token: `Bearer ${action.payload}`,
      },
    });
    yield put({ type: GET_JOB_SUCCESS, payload: response });
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: GET_JOB_FAILURE, payload: error });
  }
}

export default function* watchgetJobRequest() {
  yield takeLatest(types.GET_JOB_REQUEST, getJob);
}
