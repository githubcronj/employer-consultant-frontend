import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
import { LoginReducer } from "./loginReducer";
import otpReducer from "./otpReducer";
import reOtpReducer from "./reOtpReducer";
import { forgotPasswordReducer } from "./forgotpasReducer";
import setupReducer from "./setupReducer";
import { changePasswordReducer } from "./changePasReducer";
import { facebookReducer } from "./fbReducer";
import editProfileReducer from "./editProfileReducer";
import { getProfileReducer } from "./getProfileReducer";
import formReducer from "store/slices/formSlice";
import { getjobReducer } from "./getjobReducer";
import { deletejobReducer } from "./deletejobReducer";
import editJobReducer from "./editJobPostReducer";
import { viewProfileReducer } from "./viewProfileReducer";
import resumeDataFillingReducer from "./resumeDataFillingReducer";
import csvUploadReducer from "./csvMultipleJobUploadReducer";
import generateResponseReducer from "./generateResponseReducer";
import generateSkillsReducer from "./generateSkillsReducer";
import { setDetailsReducer } from "./setupDetailsReducer";
import { jobsReducer } from "./recomandedJobReducer";
import applyJobReducer from "./applyJobReducer";
import cancelJobReducer from "./cancelJobReducer";
import appliedJobReducer from "./appliedJobReducer";
import savedJobReducer from "./savedJobReducer";
import fetchappliedConsultantReducer from "./fetchAppliedconsultantReducer";
import { editProfileResume } from "./editConsultantProfileReducer";
import shortlistConsultantReducer from "./shortlistconsultantReducer";
import sheduledConsultantReducer from "./sheduleConsultantReducer";
import unsavedJobReducer from "./unsaveJobReducer";
import visitJobReducer from "./visitJobReducer";
import recentJobReducer from "./recentJobReducer";
import JobAlertReducer from "./jobAlertReducer";
import PostJobAlertReducer from "./postJobAlertReducer";
import editJobAlertReducer from "./editJobAlertReducer";
import userNotificationReducer from "./userNotificationReducer";
import emailInviteReducer from "./emailInviteReducer";
const rootReducer = combineReducers({
  LoginReducer,
  registerReducer,
  otpReducer,
  reOtpReducer,
  forgotPasswordReducer,
  setupReducer,
  changePasswordReducer,
  facebookReducer,
  editProfileReducer,
  getProfileReducer,
  editJobReducer,
  form: formReducer,
  getjobReducer,
  deletejobReducer,
  resumeDataFillingReducer,
  viewProfileReducer,
  csvUploadReducer,
  generateResponseReducer,
  generateSkillsReducer,
  setDetailsReducer,
  jobsReducer,
  applyJobReducer,
  cancelJobReducer,
  appliedJobReducer,
  savedJobReducer,
  fetchappliedConsultantReducer,
  editProfileResume,
  shortlistConsultantReducer,
  sheduledConsultantReducer,
  unsavedJobReducer,
  visitJobReducer,
  recentJobReducer,
  JobAlertReducer,
  PostJobAlertReducer,
  editJobAlertReducer,
  userNotificationReducer,
  emailInviteReducer,
});

export default rootReducer;
