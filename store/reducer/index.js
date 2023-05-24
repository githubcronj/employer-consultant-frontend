import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
import { LoginReducer } from "./loginReducer";
const rootReducer = combineReducers({
  LoginReducer,
  registerReducer,
});

export default rootReducer;
