import { takeLatest, call, put } from "redux-saga/effects";
import * as types from "../type/otpType";
import api from "../../utils/api";
import { toast } from "react-toastify";

export default function* watchOtp() {
  yield takeLatest(types.OTP_REQUEST, otp);
}
function* otp(action) {
  try {
    const response = yield call(api.post, "/verify-otp", action.payload);
    yield put({ type: types.OTP_SUCCESS, payload: response.data });
    toast.success("Signup successful");
  } catch (error) {
    yield put({ type: types.OTP_ERROR, payload: error.message });
    toast.error("otp unsuccesfull");
  }
}
