// import { makeApiRequest } from '../../utils/api';
// import { call, put, takeLatest } from 'redux-saga/effects';
// import * as types from '../type/recommandedJobtype';
// import { fetchJobsSuccess, fetchJobsFailure } from '../action/recommandedJobAction';

// function* fetchJobs(action) {
//   try {
//     const { payload } = action;
//     const { data, token } = payload;
//     const response = yield call(makeApiRequest, {
//       endpoint: '/recommend-jobs',
//       method: 'GET',
//       data: data,
//       headers: {
//         Authorization: `Bearer ${token}`,

//         Token: `Bearer ${token}`,
//       },

//     });

//     yield put(fetchJobsSuccess(response));

//   } catch (error) {

//     yield put(fetchJobsFailure(error.message));
//   }
// }

// export function* watchjobsSaga() {
//   yield takeLatest(types.FETCH_JOBS_REQUEST, fetchJobs);
// }

import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/recommandedJobtype";
import {
  fetchJobsSuccess,
  fetchJobsFailure,
  fetchRecommendSuccess,
  fetchRecommendFailure,
  // navigateToJobApplySearch,
} from "../action/recommandedJobAction";
import Router, { useRouter } from "next/router";

function* fetchJobs(action) {
  try {
    const { payload } = action;
    const { data, token } = payload;
    const response = yield call(makeApiRequest, {
      endpoint: "/recommend-jobs",
      method: "GET",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `Bearer ${token}`,
      },
    });

    yield put(fetchJobsSuccess(response));
  } catch (error) {
    yield put(fetchJobsFailure(error.message));
  }
}

function* fetchRecommendJobs(action) {
  try {
    const { payload } = action;
    const { data, token } = payload;
    const queryParams = {};

    // Add jobTitle parameter
    queryParams.jobTitle = data?.jobTitle;

    // Add location parameter if it exists
    if (data?.location) {
      queryParams.location = data.location;
    }

    const queryString = new URLSearchParams(queryParams).toString();
    const endpoint = `/recommend-jobs?${queryString}`;

    const response = yield call(makeApiRequest, {
      endpoint,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Token: `Bearer ${token}`,
      },
    });

    yield put(fetchRecommendSuccess(response));
  } catch (error) {
    yield put(fetchRecommendFailure(error.message));
  }
}

export function* watchjobsSaga() {
  yield takeLatest(types.FETCH_JOBS_REQUEST, fetchJobs);
  yield takeLatest(types.FETCH_RECOMMAND_JOBS, fetchRecommendJobs);
}
