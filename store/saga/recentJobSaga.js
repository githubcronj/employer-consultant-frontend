import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/recentJobType";
import {
  fetchRecentJobs,
  fetchRecentSuccess,
  fetchRecentFailure,
  deleteRecentJobs,
  deleteRecentSuccess,
  deleteRecentFailure,
} from "../action/recentJobAction.js";

function* fetchRecentJobsSaga(action) {
  try {
    const { payload } = action;
    const token = payload;

    const endpoint = `/fetch-search`;
    const response = yield call(makeApiRequest, {
      endpoint,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `Bearer ${token}`,
      },
    });

    yield put(fetchRecentSuccess(response));
  } catch (error) {
    yield put(fetchRecentFailure(error.message));
  }
}

function* deleteRecentJobsSaga(action) {
  try {
    const { payload } = action;
    const token = payload;

    const endpoint = `/delete-search`;
    const response = yield call(makeApiRequest, {
      endpoint,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `Bearer ${token}`,
      },
    });

    yield put(deleteRecentSuccess(response));
  } catch (error) {
    yield put(deleteRecentFailure(error.message));
  }
}

export function* watchRecentJobsSaga() {
  yield takeLatest(types.FETCH_RECENT_JOBS, fetchRecentJobsSaga);
  yield takeLatest(types.DELETE_RECENT_JOBS, deleteRecentJobsSaga);
}
