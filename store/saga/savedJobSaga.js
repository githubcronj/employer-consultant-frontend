import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import { SAVED_JOB_FAILURE, SAVED_JOB_SUCCESS, SAVED_JOB_REQUEST} from "store/type/savedJobType";

function* savedJobData(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/save-job",
      method: "GET",
      headers: {
        Authorization: `Bearer ${action.payload}`,
        "Content-Type": "application/json",
      },
    });
    console.log('in saga saved ',response);
    yield put({ type: SAVED_JOB_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: SAVED_JOB_FAILURE, payload: error });
  }
}

export default function* watchSavedJob() {
  yield takeLatest(SAVED_JOB_REQUEST, savedJobData);
}

