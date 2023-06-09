import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../type/jobPostType';
import { JOB_SAVE_FAILURE, JOB_SAVE_SUCCESS } from 'store/type/jobPostType';

import { makeApiRequest } from '../../utils/api';
import { useEffect, useState } from 'react';


function* saveJobPost(action) {

  console.warn('data',action);
 
    const data = {
      jobTitle: action.payload.jobData.jobTitle,
    experience: action.payload.jobData.experience,
    deadline: action.payload.jobData.deadline,
    email: action.payload.jobData.email,
    jobType: action.payload.jobData.jobType,
    salary: action.payload.jobData.salary,
    minSalary: action.payload.jobData.minSalary,
    maxSalary: action.payload.jobData.maxSalary,
    description: action.payload.jobData.description,
    phoneNumber: action.payload.jobData.phoneNumber,

  
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
   
    yield put({ type: JOB_SAVE_SUCCESS, payload: response.data });
    console.log('test in saga',response.data)
  } catch (error) {
    console.log('API call error:', error);
   
    yield put({ type: JOB_SAVE_FAILURE, payload: error });

  }
}


export default function* watchJobSaveRequest() {
  yield takeLatest(types.JOB_SAVE_REQUEST, saveJobPost);
}