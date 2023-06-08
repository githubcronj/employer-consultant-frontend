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
import watchFetchJobFormData from "./editJobPostSaga";
import watchgetJobRequest from "./getjobSaga";
import watchdeleteJobRequest from "./deletejobSaga";
import watchviewProfileRequest from "./viewProfileSaga";
import watchCsvSaveRequest from "./csvMutipleJobUploadSaga";
import watchGenerateResponseRequest from "./generateResponseSaga";
import watchResumeDetails from "./setupDetailsSaga";
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
    watchFetchJobFormData(),
    watchgetJobRequest(),
    watchdeleteJobRequest(),
    watchviewProfileRequest(),
    watchCsvSaveRequest(),
    watchGenerateResponseRequest(),
    watchResumeDetails()
  ]);
}
