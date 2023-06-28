import * as types from "../type/scheduleTypes";
export function addintosheduleRequest(payload) {
  console.log(payload, "action for shedule");
  return {
    type: types.ADD_SCHEDULE_CONSULTANT_REQUEST,
    payload: payload,
  };
}
export function addintosheduleSuccess(payload) {
  return {
    type: types.ADD_SCHEDULE_CONSULTANT_SUCCESS,
    payload: {
      payload: payload,
    },
  };
}

export function addintosheduleFailure(payload) {
  return {
    type: types.ADD_SCHEDULE_CONSULTANT_FAILURE,
    payload: payload,
  };
}

export function fetchscheduledconsultantRequest(payload){
  
  return{
    type:types.FETCH_SCHEDULED_CONSULTANT_REQUEST,
    payload:payload,
  }
}
export function fetchscheduledconsultantSuccess(payload){
  return{
    type:types.FETCH_SCHEDULED_CONSULTANT_SUCCESS,
    payload:payload,
  }
}
export function fetchscheduledconsultantfailure(errors){
  return{
    type:types.FETCH_SCHEDULED_CONSULTANT_FAILURE,
    errors:errors,
  }
}
export function rejectsheduledconsultantRequest(payload){
  return{
    type:types.REJECT_SCHEDULE_CONSULTANT_REQUEST,
    payload:payload,
  }
}
export function rejectsheduledconsultantSuccess(payload){
  return{
    type:types.REJECT_SCHEDULE_CONSULTANT_SUCCESS,
    payload:payload,
  }
}
export function rejectsheduledconsultantfailure(errors){
  return{
    type:types.REJECT_SCHEDULE_CONSULTANT_FAILURE,
    errors:errors,
  }
}