import { call, put, takeLatest } from "redux-saga/effects";
// import * as types from '../type/setupDetailsType';
import { makeApiRequest } from "../../utils/api";
import { useEffect, useState } from "react";
import {
  RESUME_FAILURE,
  RESUME_REQUEST,
  RESUME_SUCCESS,
} from "store/type/setupDetailsType";

function* sendResumeData(action) {
  const data = {
    fullName: action.payload.data.personalDetails.fullName,
    email: action.payload.data.personalDetails.email,
    phoneNumber: action.payload.data.personalDetails.phoneNumber,
    gender: action.payload.data.personalDetails.gender,
    dob: action.payload.data.personalDetails.birth,
    location: action.payload.data.personalDetails.birth,
    jobRole: action.payload.data.personalDetails.birth,
    image:action.payload.data.personalDetails.image,
    education: action.payload.data.educationDetails,
    experience: action.payload.data.experienceDetails,
    project: action.payload.data.projectDetails,
    certification: action.payload.data.certificationDetails,
    skills: {
      skillName: action.payload.data.skillsDetails.map(
        (skill) => skill.skillName
      ),
    },
  };
  
  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/create-resume",
      method: "POST",
      data: data,
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
      },
    });
    yield put({ type: RESUME_SUCCESS, payload: response.data });
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);
    yield put({ type: RESUME_FAILURE, payload: error });
  }
}

export default function* watchResumeDetails() {
  yield takeLatest(RESUME_REQUEST, sendResumeData);
}
