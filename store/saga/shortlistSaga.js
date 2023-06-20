import { addintoshortlistFailure, addintoshortlistSuccess } from "store/action/shortlistAction";
import { makeApiRequest } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_SHORTLIST_REQUEST } from "store/type/shortlistType";

function* shortlistConsultantSaga(action) {
  try {
    const { payload } = action;
    console.log(action.payload, "action shortlist");
    const response = yield call(makeApiRequest, {
      endpoint: "/shortlist-candidate",
      method: "POST",
      headers: {
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
      body: {
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
