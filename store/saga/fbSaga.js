import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../type/fbType";
import axios from "axios";
import { makeApiRequest } from "../../utils/api";
import { toast } from "react-toastify";

function* facebookSaga() {
  yield takeLatest("FACEBOOK_LOGIN", function* () {
    window.open(`http://localhost:3001/facebook/callback`, "_self");
  });
}

function* facebookLoginRedirectSaga() {
  yield takeLatest("FACEBOOK_LOGIN_REDIRECT", function* () {
    try {
      const url = `http://localhost:3001/login/success`;
      const response = yield call(axios.get, url, { withCredentials: true });
      yield put({
        type: types.FACEBOOK_LOGIN_SUCCESS,
        payload: response.data.user,
      });
    } catch (error) {
      yield call(toast.error, "Something went wrong");
    } finally {
    }
  });
}
export default function* watchfacebookSaga() {
  yield takeLatest(types.FACEBOOK_LOGIN, facebookSaga);
  yield takeLatest(types.FACEBOOK_LOGIN_REDIRECT, facebookLoginRedirectSaga);
}
