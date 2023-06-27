import { addintoshortlistFailure, addintoshortlistSuccess, fetchshortlistconsultantSuccess, fetchshortlistconsultantfailure, rejectshortlistconsultantSuccess, rejectshortlistconsultantfailure } from "store/action/shortlistAction";
import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_SHORTLIST_REQUEST, FETCH_SHORTLISTED_COSULTANT_REQUEST, REJECT_SHORTLISTED_COSULTANT_REQUEST } from "store/type/shortlistType";
import { REMOVE_APPLIED_CONSULTANT_REQUEST } from "store/type/fetchAppliedConsultantType";
import { rejectsheduledconsultantSuccess, rejectsheduledconsultantfailure } from "store/action/sheduleConsultantAction";
import { REJECT_SCHEDULE_CONSULTANT_REQUEST } from "store/type/scheduleTypes";

function* shortlistConsultantSaga(action) {
  try {
    const { payload } = action;
    console.log(action.payload, "action shortlist");
    const body = {
      jobId: action.payload.jobId,
      consultantId: action.payload.consultantId,
    }
    console.log(body ,"consID")
    const response = yield call(makeApiRequest, {
      endpoint: "/shortlist-consultant",
      method: "POST",
      headers: {
        Authorization:`Bearer ${action.payload.accessToken}`,
      },
      data: {
        jobId: action.payload.jobId,
        consultantId: action.payload.consultantId,
      },
    });

    yield put(addintoshortlistSuccess(response));
  } catch (error) {
    yield put(addintoshortlistFailure(error.message));
  }
}

function* fetchShortlistedConsultantSaga(action){
  try{
    console.log(action.payload,"action saga")
    const { payload} = action;
    const {accessToken, search, id } =payload;
    const jobId = action.payload;
    
    console.log(action,"seacech")
    console.log(jobId,"jobID")
    const response = yield call(makeApiRequest, {
      endpoint:`/fetch-shortlisted-consultant?jobId=${jobId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${action.accessToken}`,
      },
    });
    yield put(fetchshortlistconsultantSuccess(response));
  }catch(error){
    yield put(fetchshortlistconsultantfailure(error.message));
  }

}
function* rejectSheduledConsultantSaga(action) {
  try {
    const { payload } = action;
    const {accessToken, search, id } =payload;
    const response = yield call(makeApiRequest, {
    endpoint:'/schedule-list',
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
export function* watchshortlistConsultantSaga() {
  yield takeLatest(
 ADD_SHORTLIST_REQUEST,
    shortlistConsultantSaga
  );
  yield takeLatest(FETCH_SHORTLISTED_COSULTANT_REQUEST,fetchShortlistedConsultantSaga);
  yield takeLatest(REJECT_SCHEDULE_CONSULTANT_REQUEST,rejectSheduledConsultantSaga)

 
}
