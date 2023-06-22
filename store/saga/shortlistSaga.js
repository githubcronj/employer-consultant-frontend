import { addintoshortlistFailure, addintoshortlistSuccess } from "store/action/shortlistAction";
import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_SHORTLIST_REQUEST } from "store/type/shortlistType";

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

export function* watchshortlistConsultantSaga() {
  yield takeLatest(
 ADD_SHORTLIST_REQUEST,
    shortlistConsultantSaga
  );
}
