import * as types from "../type/postJobAlterType";


export function postJobAlert(payload) {
    return {
      type: types.POST_JOB_ALERT_SUCCESS,
      payload: payload,
    };
  }

  export const postJobRemoveData = (index) => {
    return {
      type: types.POST_JOB_ALERT_FAILURE,
      payload: index,
    };
  };