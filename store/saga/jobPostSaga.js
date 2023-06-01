import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../type/jobPostType';
import { JOB_SAVE_FAILURE, JOB_SAVE_SUCCESS } from 'store/type/jobPostType';

import { makeApiRequest } from '../../utils/api';
import { useEffect, useState } from 'react';


function* saveJobPost(action) {
 
    // console.log('in saga',action)
    const data = {
      jobTitle: action.payload.jobTitle,
    experience: action.payload.experience,
    deadline: action.payload.deadline,
    email: action.payload.email,
    jobType: action.payload.jobType,
    salary: action.payload.salary,
    minSalary: action.payload.minSalary,
    maxSalary: action.payload.maxSalary,
    description: action.payload.description,
    phoneNumber: action.payload.phoneNumber,
  
    }
  try {
    
    const response = yield call(makeApiRequest, {
        endpoint: '/job',
        method: 'POST',

        data: data,
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.accessToken}`,
        },
      });
    // yield put(profileSaveSuccess(response.data));
    yield put({ type: JOB_SAVE_SUCCESS, payload: response.data });
    console.log('test in saga',response.data)
  } catch (error) {
    console.log('API call error:', error);
    // yield put(profileSaveFailure(error));
    yield put({ type: JOB_SAVE_FAILURE, payload: error });

  }
}


export default function* watchJobSaveRequest() {
  yield takeLatest(types.JOB_SAVE_REQUEST, saveJobPost);
}