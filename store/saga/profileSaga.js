import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/profileActionType";
import {
  PROFILE_SAVE_FAILURE,
  PROFILE_SAVE_SUCCESS,
} from "store/type/profileActionType";

import { makeApiRequest } from "../../utils/api";
import { useEffect, useState } from "react";

function* saveProfile(action) {
  console.log('insaga',action);

  const data = new FormData();
  data.append("companyName", action.payload.profileData.companyName);
  data.append("industryType", action.payload.profileData.industryType);
  data.append("companyWebsiteUrl", action.payload.profileData.companyWebsiteUrl);
  data.append("email", action.payload.profileData.email);
  data.append("aboutCompany", action.payload.profileData.aboutCompany);
  data.append("companySize", action.payload.profileData.companySize);
  data.append("companyLocation", action.payload.profileData.companyLocation);
  data.append("companyFoundedDate", action.payload.profileData.companyFoundedDate);
  data.append("logo",action.payload.selectedImage)
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/employer/profile",
      method: "POST",

      data: data,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${action.payload.profileData.accessToken}`,
      },
    });
    // yield put(profileSaveSuccess(response.data));
    yield put({ type: PROFILE_SAVE_SUCCESS, payload: response.data });
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);
    // yield put(profileSaveFailure(error));
    yield put({ type: PROFILE_SAVE_FAILURE, payload: error });
  }
}

export default function* watchProfileSaveRequest() {
  yield takeLatest(types.PROFILE_SAVE_REQUEST, saveProfile);
}
