
import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";

import { ADD_SCHEDULE_CONSULTANT_REQUEST, FETCH_SCHEDULED_CONSULTANT_REQUEST, REJECT_SCHEDULE_CONSULTANT_REQUEST } from "store/type/scheduleTypes";
import { addintosheduleFailure, addintosheduleSuccess, fetchscheduledconsultantSuccess, fetchscheduledconsultantfailure, rejectsheduledconsultantSuccess, rejectsheduledconsultantfailure } from "store/action/sheduleConsultantAction";

function* sheduledConsultantSaga(action) {
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
        scheduledDate:action.payload.scheduledDate,
      },
    });

    yield put(addintosheduleSuccess(response));
  } catch (error) {
    yield put(addintosheduleFailure(error.message));
  }
}

function* fetchScheduledConsultantSaga(action){
  try{
    console.log(action.payload,"action saga")
    const { payload} = action;
    const {accessToken, search, id } =payload;
    const jobId = action.payload;
    
    console.log(action,"seacech")
    console.log(jobId,"jobID")
    const response = yield call(makeApiRequest, {
      endpoint:`/schedule-list?jobId=${jobId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${action.accessToken}`,
      },
    });
    yield put(fetchscheduledconsultantSuccess(response));
  }catch(error){
    yield put(fetchscheduledconsultantfailure(error.message));
  }

}

export function* watchsheduledConsultantSaga() {
  yield takeLatest(ADD_SCHEDULE_CONSULTANT_REQUEST, sheduledConsultantSaga);
  yield takeLatest(FETCH_SCHEDULED_CONSULTANT_REQUEST,fetchScheduledConsultantSaga)
 
}
