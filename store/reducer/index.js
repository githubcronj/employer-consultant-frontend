import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
const rootReducer = combineReducers({
  
  registerReducer,
});

export default rootReducer;
