import * as types from "../type/facebookType";
import { takeLatest, call, put } from "redux-saga/effects";

function* facebookSaga(action) {
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/facebook/callback",
      method: "GET",
    });

    if (response.status === 200) {
      yield put({ type: "FACEBOOK_SUCCESS", payload: response.data });
      window.location.href = "/auth/login/success";
    } else {
      yield put({ type: FACEBOOK_ERROR, payload: " facebook Login failed" });
      toast.error(" facebook Login failed");
    }
  } catch (error) {
    console.log(error);

    yield put({ type: FACEBOOK_ERROR, payload: error.message });
    toast.error("An error occurred");
  }
}

export default function* watchfacebookSaga() {
  yield takeLatest(types.FACEBOOK_REQUEST, facebookSaga);
}
