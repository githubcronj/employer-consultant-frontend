import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
import { LoginReducer } from "./loginReducer";
import otpReducer from "./otpReducer";
import reOtpReducer from "./reOtpReducer";
import {forgotPasswordReducer} from "./forgotpasReducer";
const rootReducer = combineReducers({
  LoginReducer,
  registerReducer,
  otpReducer,
  reOtpReducer,
  forgotPasswordReducer,
});

export default rootReducer;
