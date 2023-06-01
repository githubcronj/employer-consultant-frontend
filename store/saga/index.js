import { all } from "redux-saga/effects";
import watchRegister from "./registerSaga";
import watchLogin from "./loginSaga";
import watchOtp from "./otpSaga";
import watchReOtp from "./reOtpSaga";
import watchforgotpasSaga from "./forgotPasSaga";
import watchProfileSaveRequest from "./profileSaga";
import watchChangePasswordSaga from "./changePasSaga";
import watchfacebookSaga from "./fbSaga";
import watchgetProfileRequest from "./getProfileSaga";
import watchFetchFormData from "./editProfileSaga";
import watchJobSaveRequest from "./jobPostSaga";
import watchgetJobRequest from "./getjobSaga";
import watchdeleteJobRequest from "./deletejobSaga";
export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchRegister(),
    watchOtp(),
    watchReOtp(),
    watchforgotpasSaga(),
    watchProfileSaveRequest(),
    watchChangePasswordSaga(),
    watchFetchFormData(),
    watchfacebookSaga(),
    watchgetProfileRequest(),
    watchJobSaveRequest(),
    watchgetJobRequest(),
    watchdeleteJobRequest(),
  ]);
}
