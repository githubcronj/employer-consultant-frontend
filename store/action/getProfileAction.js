import * as types from "../type/getProfileActionType";

export const profileRequest = (profileData) => {
  return {
    type: types.PROFILE_REQUEST,
    payload: profileData,
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
