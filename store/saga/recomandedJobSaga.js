

import { makeApiRequest } from '../../utils/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../type/recommandedJobtype';
import { fetchJobsSuccess, fetchJobsFailure } from '../action/recommandedJobAction';



function* fetchJobs(action) {
  try {
    const { payload } = action;
    const { data, token } = payload;
    const response = yield call(makeApiRequest, {
      endpoint: '/recommend-jobs', 
      method: 'GET', 
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

export function* watchjobsSaga() {
  yield takeLatest(types.FETCH_JOBS_REQUEST, fetchJobs);
}


