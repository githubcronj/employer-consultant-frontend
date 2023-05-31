import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
import { LoginReducer } from "./loginReducer";
import otpReducer from "./otpReducer";
import reOtpReducer from "./reOtpReducer";
import { forgotPasswordReducer } from "./forgotpasReducer";
import setupReducer from "./setupReducer";
import { changePasswordReducer } from "./changePasReducer";
import { facebookReducer } from "./fbReducer";
import { getProfileReducer } from "./getProfileReducer";
const rootReducer = combineReducers({
  LoginReducer,
  registerReducer,
  otpReducer,
  reOtpReducer,
  forgotPasswordReducer,
  setupReducer,
  changePasswordReducer,
  facebookReducer,
  getProfileReducer,
});

export default rootReducer;
