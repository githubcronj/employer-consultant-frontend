import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
import { LoginReducer } from "./loginReducer";
import otpReducer from "./otpReducer";
import reOtpReducer from "./reOtpReducer";
const rootReducer = combineReducers({
  LoginReducer,
  registerReducer,
  otpReducer,
  reOtpReducer,
});

export default rootReducer;
