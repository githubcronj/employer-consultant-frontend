import { combineReducers } from '@reduxjs/toolkit';
import { LoginReducer } from './loginReducer';
const rootReducer = combineReducers({
  // Define your reducers here
  LoginReducer
});

export default rootReducer;
