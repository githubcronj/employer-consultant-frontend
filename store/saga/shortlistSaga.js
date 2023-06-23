import { addintoshortlistFailure, addintoshortlistSuccess, fetchshortlistconsultantSuccess, fetchshortlistconsultantfailure, rejectshortlistconsultantSuccess, rejectshortlistconsultantfailure } from "store/action/shortlistAction";
import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_SHORTLIST_REQUEST, FETCH_SHORTLISTED_COSULTANT_REQUEST, REJECT_SHORTLISTED_COSULTANT_REQUEST } from "store/type/shortlistType";
import { REMOVE_APPLIED_CONSULTANT_REQUEST } from "store/type/fetchAppliedConsultantType";

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

// function* fetchShortlistConsultantSaga(action){
//   try{
//     console.log(action,"action saga")
//     const { payload} = action;
//     const {accessToken, search, id } =payload
//     const jobID = action.payload.id;
//     console.log(action,"seacech")
//     console.log(action.payload.id,"jobID")
//     const response = yield call(makeApiRequest, {
//       endpoint:`/fetch-shortlisted-consultant?jobId=${action.payload.id}&?search=${action.payload.search}`,
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${action.accessToken}`,
//       },
//     });
//     yield put(fetchshortlistconsultantSuccess(response));
//   }catch(error){
//     yield put(fetchshortlistconsultantfailure(error.message));
//   }

// }
// function* rejectShortlistConsultantSaga(action) {
//   try {
//     const { payload } = action;
//     console.log(action.payload,"actiion reject")
//     const response = yield call(makeApiRequest, {
//     endpoint:'/remove-shortlisted-candidate',
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${action.payload.accessToken}`,
//       },
//       data : {
//         jobId:action.payload.jobId,
//         consultantId:action.payload.consultantId,
//       },
//     });

   
//       yield put(rejectshortlistconsultantSuccess(response));
   
      
//     }
//    catch (error) {
//     yield put(rejectshortlistconsultantfailure(error.message));
//   }
// }
export function* watchshortlistConsultantSaga() {
  yield takeLatest(
 ADD_SHORTLIST_REQUEST,
    shortlistConsultantSaga
  );
 
}
