import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import {
  RESUME_FAILURE,
  RESUME_REQUEST,
  RESUME_SUCCESS,
} from "store/type/setupDetailsType";

function* sendResumeData(action) {
  const formData = new FormData();

  formData.append("fullName", action.payload.data.personalDetails.fullName);
  formData.append("email", action.payload.data.personalDetails.email);
  formData.append("phoneNumber", action.payload.data.personalDetails.phoneNumber);
  formData.append("gender", action.payload.data.personalDetails.gender);
  formData.append("dob", action.payload.data.personalDetails.birth);
  formData.append("location", action.payload.data.personalDetails.birth);
  formData.append("jobRole", action.payload.data.personalDetails.birth);
  const imageFile = action.payload.data.personalDetails.image;
  formData.append("image", imageFile, imageFile.name);
  action.payload.data.education.forEach((education, index) => {
    Object.entries(education).forEach(([key, value]) => {
      formData.append(`education[${index}].${key}`, value);
    });
  });

  action.payload.data.experience.forEach((experience, index) => {
    Object.entries(experience).forEach(([key, value]) => {
      formData.append(`experience[${index}].${key}`, value);
    });
  });

  action.payload.data.project.forEach((project, index) => {
    Object.entries(project).forEach(([key, value]) => {
      formData.append(`project[${index}].${key}`, value);
    });
  });

  action.payload.data.certification.forEach((certification, index) => {
    Object.entries(certification).forEach(([key, value]) => {
      formData.append(`certification[${index}].${key}`, value);
    });
  });

  action.payload.data.skill.forEach((skill, index) => {
    formData.append(`skills.skillName[${index}]`, skill.skillName);
  });

  try {
    const response = yield call(makeApiRequest, {
      endpoint: "/create-resume",
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
        "Content-Type": "multipart/form-data", // Set the content-type header
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
