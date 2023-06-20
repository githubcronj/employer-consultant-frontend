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
