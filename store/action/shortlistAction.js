import * as types from "../type/shortlistType";
export function addintoshortlistRequest(payload) {
  console.log(payload, "action for shortlist");
  return {
    type: types.ADD_SHORTLIST_REQUEST,
    payload: payload,
  };
}

export function addintoshortlistSuccess(payload) {
  return {
    type: types.ADD_SHORTLIST_SUCCESS,
    payload: {
      payload: payload,
    },
  };
}

export function addintoshortlistFailure(payload) {
  return {
    type: types.ADD_SHORTLIST_FAILURE,
    payload: payload,
  };
}

export function fetchshortlistconsultantRequest(payload) {
  console.log("paylod action", payload);
  return {
    type: types.FETCH_SHORTLISTED_COSULTANT_REQUEST,
    payload: payload,
  };
}
export function fetchshortlistconsultantSuccess(payload) {
  return {
    type: types.FETCH_SHORTLISTED_CONSULTANT_SUCCESS,
    payload: payload,
  };
}
export function fetchshortlistconsultantfailure(errors) {
  return {
    type: types.FETCH_SHORTLISTED_COSULTANT_FAILURE,
    errors: errors,
  };
}

export function rejectshortlistconsultantRequest(payload) {
  return {
    type: types.REJECT_SHORTLISTED_CONSULTANT_REQUEST,
    payload: payload,
  };
}
export function rejectshortlistconsultantSuccess(payload) {
  return {
    type: types.REJECT_SHORTLISTED_CONSULTANT_SUCCESS,
    payload: payload,
  };
}
export function rejectshortlistconsultantfailure(errors) {
  return {
    type: types.REJECT_SHORTLISTED_COSULTANT_FAILURE,
    errors: errors,
  };
}
