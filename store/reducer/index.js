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
import { getjobReducer } from "./getjobReducer";
import { deletejobReducer } from "./deletejobReducer";
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
  getjobReducer,
  deletejobReducer,
});

export default rootReducer;
