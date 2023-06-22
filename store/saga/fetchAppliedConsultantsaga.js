import { makeApiRequest } from '../../utils/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_APPLIED_CONSULTANT_REQUEST, REMOVE_APPLIED_CONSULTANT_REQUEST, REMOVE_APPLIED_CONSULTANT_SUCCESS} from "../type/fetchAppliedConsultantType"
import { fetchAppliedConsultantSuccess, fetchAppliedConsultantFailure, removeAppliedConsultantSuccess, removeAppliedConsultantFailure } from '../action/fetchAppliedConsultantAction';
function* fetchAppliedConsultantSaga(action) {
  try {
    console.log(action,"action saga")
    const { payload} = action;
    const {accessToken, search, id } =payload
    const queryParams = new URLSearchParams({ jobId: id, search });
   
    const jobID = action.payload.id;
    console.log(action,"seacech")
    console.log(action.payload.id,"jobID")
   
    // const endpoint = `/fetch-applied-consultant?${queryParams.toString()}`;
    const response = yield call(makeApiRequest, {
      endpoint:`/fetch-applied-consultant?jobId=${action.payload.id}&?search=${action.payload.search}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${action.accessToken}`,
      },
    });
   
    yield put(fetchAppliedConsultantSuccess(response));
  } catch (error) {
    yield put(fetchAppliedConsultantFailure(error.message));
  }
}

function* rejectAppliedConsultantSaga(action) {
  try {
    const { payload } = action;
    console.log(action.payload,"actiion reject")
    const response = yield call(makeApiRequest, {
    endpoint:'/reject-applied-consultant',
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
      data : {
        jobId:action.payload.jobId,
        consultantId:action.payload.consultantId,
      },
    });

   
      yield put(removeAppliedConsultantSuccess(response));
   
      
    }
   catch (error) {
    yield put(removeAppliedConsultantFailure(error.message));
  }
}

export function* watchAppliedConsultantSaga() {
  yield takeLatest(FETCH_APPLIED_CONSULTANT_REQUEST, fetchAppliedConsultantSaga);
  yield takeLatest(REMOVE_APPLIED_CONSULTANT_REQUEST, rejectAppliedConsultantSaga);
}
