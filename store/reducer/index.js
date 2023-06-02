import { combineReducers } from '@reduxjs/toolkit';
import registerReducer from './registerReducer';
import { LoginReducer } from './loginReducer';
import otpReducer from './otpReducer';
import reOtpReducer from './reOtpReducer';
import { forgotPasswordReducer } from './forgotpasReducer';
import setupReducer from './setupReducer';
import { changePasswordReducer } from './changePasReducer';
import { facebookReducer } from './fbReducer';
import editProfileReducer from './editProfileReducer';
import { getProfileReducer } from './getProfileReducer';
import formReducer from 'store/slices/formSlice';
import { getjobReducer } from "./getjobReducer";
import { deletejobReducer } from "./deletejobReducer";
import editJobReducer from "./editJobPostReducer"
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
});

export default rootReducer;
