import * as types from "store/type/getProfileType";

export const profileRequest = (payload) => {
  return {
    type: types.PROFILE_REQUEST,
    payload,
  };
};

export const profileSuccess = (data) => ({
  type: types.PROFILE_SUCCESS,
  payload: data,
});

export const profileFailure = (error) => ({
  type: types.PROFILE_FAILURE,
  payload: error,
});
