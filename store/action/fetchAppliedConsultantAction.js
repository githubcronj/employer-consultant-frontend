// actions.js
import * as types from "../type/fetchAppliedConsultantType";

export function fetchAppliedConsultantRequest(payload) {
  console.log(payload,"action")
  return {
    type: types.FETCH_APPLIED_CONSULTANT_REQUEST,
   
    payload:payload
  };
 
}

export function fetchAppliedConsultantSuccess(payload) {
  return {
    type: types.FETCH_APPLIED_CONSULTANT_SUCCESS,
    payload: {
      payload: payload,
     
    },
    
  };
}

export function fetchAppliedConsultantFailure(payload) {
  return {
    type: types.FETCH_APPLIED_CONSULTANT_FAILURE,
    payload: payload,
  };
}
