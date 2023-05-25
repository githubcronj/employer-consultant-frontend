import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../type/reOtpType";
import api from "../../utils/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function* watchReOtp() {
  yield takeLatest(types.REENTEROTP_REQUEST, reOtp);
}
function* reOtp(action) {
  try {
    const response = yield call(api.post, "/re-send-otp", action.payload);
    yield put({ type: types.REENTEROTP_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.REENTEROTP_ERROR, payload: error.message });
    toast.error(error.message);
  }
}
