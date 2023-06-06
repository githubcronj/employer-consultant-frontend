import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/profileActionType";
import { PROFILE_SAVE_FAILURE, PROFILE_SAVE_SUCCESS } from "store/type/profileActionType";

import { makeApiRequest } from "../../utils/api";
import { useEffect, useState } from "react";


function* saveProfile(action) {
 
  // console.log('in saga',action)
  const data = {
    companyName: action.payload.companyName,
    industryType: action.payload.industryType,
    // companyId: action.payload.companyId,
    companyWebsiteUrl: action.payload.companyWebsiteUrl,
    email: action.payload.email,
    aboutCompany: action.payload.aboutCompany,
    companySize: action.payload.companySize,
    companyLocation: action.payload.companyLocation,
    companyFoundedDate: action.payload.companyFoundedDate,
  
  };
  try {
    
    const response = yield call(makeApiRequest, {
      endpoint: "/employer/profile",
      method: "POST",

      data: data,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
    });
    // yield put(profileSaveSuccess(response.data));
    yield put({ type: PROFILE_SAVE_SUCCESS, payload: response.data });
    console.log("test in saga",response.data);
  } catch (error) {
    console.log("API call error:", error);
    // yield put(profileSaveFailure(error));
    yield put({ type: PROFILE_SAVE_FAILURE, payload: error });

  }
}


export default function* watchProfileSaveRequest() {
  yield takeLatest(types.PROFILE_SAVE_REQUEST, saveProfile);
}