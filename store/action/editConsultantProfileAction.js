 export const EDIT_CONSULTANT_SUCCESS = "EDIT_CONSULTANT_SUCCESS";
 export const EDIT_CONSULTANT_FAILURE = "EDIT_CONSULTANT_FAILURE";

export function EditConsultantSuccess(payload) {
    console.log("action")
  return {
    type: EDIT_CONSULTANT_SUCCESS,
    payload: payload,
  };
}

export function EditConsultantError(error) {
  return {
    type: EDIT_CONSULTANT_FAILURE,
    payload: error,
  };
}