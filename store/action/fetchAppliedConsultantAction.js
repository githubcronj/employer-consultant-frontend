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


export function removeAppliedConsultantRequest(payload, accessToken) {
  console.log(payload,"asasadda")
  return {
    type: types.REMOVE_APPLIED_CONSULTANT_REQUEST,
  payload:payload,
  accessToken:accessToken
  };
}

export function removeAppliedConsultantSuccess(payload) {
  return {
    type: types.REMOVE_APPLIED_CONSULTANT_SUCCESS,
    payload: {
      payload: payload,
    },
  };
}

export function removeAppliedConsultantFailure(payload) {
  return {
    type: types.REMOVE_APPLIED_CONSULTANT_FAILURE,
    payload: payload,
  };
}
