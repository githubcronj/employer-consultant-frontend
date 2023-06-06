import { forgotPassword } from "store/action/forgetPasAction";
import * as types from "../type/forgotPasswordtype";

const INITIAL_STATE = {
  forgotPassword: false,
  resetPassword: false,
  accessToken: null,
};
export function forgotPasswordReducer(state = INITIAL_STATE, action){
  switch (action.types){
  case types.FORGOT_PASSWORD:
    return {
      ...state,
      forgotPassword:false,
    };
  case types.FORGOT_PASSWORD_SUCCESS:
    return{
      ...state,
      forgotPassword:true,
      accessToken: action.payload.token,

    };
  case types.FORGOT_PASSWORD_ERROR:
    return{
      ...state,
      forgotPassword:false,
      accessToken: null,
      error:action.payload.message
    };
  case types.RESET_PASSWORD:
    return {
      ...state,
      resetPassword: false,
    };
          
  case types.RESET_PASSWORD_SUCCESS:
    return {
      ...state,
      resetPassword: true,
    };
          
  case types.RESET_PASSWORD_ERROR:
    return {
      ...state,
      resetPassword: false,
      error:action.payload.message
    };    

  default:
    return state;
  }

}