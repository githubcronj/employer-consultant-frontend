
import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";

import { ADD_SCHEDULE_CONSULTANT_REQUEST, REJECT_SCHEDULE_CONSULTANT_REQUEST } from "store/type/scheduleTypes";
import { addintosheduleFailure, addintosheduleSuccess, rejectsheduledconsultantSuccess, rejectsheduledconsultantfailure } from "store/action/sheduleConsultantAction";

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

function* rejectSheduledConsultantSaga(action) {
  try {
    const { payload } = action;
    // const {accessToken, search, id } =payload;
    const response = yield call(makeApiRequest, {
    endpoint:'/remove-shortlisted-candidate',
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
      data : {
        jobId:action.payload.jobId,
        consultantId:action.payload.consultantId,
      
      },
    });

   
      yield put(rejectsheduledconsultantSuccess(response));
   
      
    }
   catch (error) {
    yield put(rejectsheduledconsultantfailure(error.message));
  }
}

export function* watchsheduledConsultantSaga() {
  yield takeLatest(ADD_SCHEDULE_CONSULTANT_REQUEST, sheduledConsultantSaga);
 
}
