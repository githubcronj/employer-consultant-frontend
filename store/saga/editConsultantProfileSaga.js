import { call, put, takeLatest } from "redux-saga/effects";
import { makeApiRequest } from "../../utils/api";
import {
  EDIT_CONSULTANT_FAILURE_REDUCER,
  EDIT_CONSULTANT_SUCCESS_REDUCER,
  EDIT_CONSULTANT_REQUEST_REDUCER,
} from "store/type/EditConsultanProfileType";
import { EDIT_CONSULTANT_SUCCESS } from "store/action/editConsultantProfileAction";
import { toast } from "react-toastify";

function* editResumeProfile(action) {
  const formData = new FormData();
  console.log(action, "in edit saga");

  formData.append("fullName", action.payload.data?.personalDetails?.fullName);
  formData.append("email", action.payload.data?.personalDetails?.email);
  formData.append(
    "phoneNumber",
    action.payload.data?.personalDetails?.phoneNumber
  );
  formData.append("gender", action.payload.data?.personalDetails?.gender);
  formData.append("dob", action.payload.data?.personalDetails?.birth);
  formData.append("location", action.payload.data?.personalDetails?.location);
  formData.append("jobRole", action.payload.data?.personalDetails?.text);
  // const imageFile = action.payload.data.personalDetails.image;
  //   formData.append("image", imageFile, imageFile.name);
  formData.append(
    "totalExperience",
    action.payload.data?.personalDetails?.totalExperience
  );

  action.payload.data?.education?.forEach((education, index) => {
    Object.entries(education).forEach(([key, value]) => {
      formData.append(`education[${index}].${key}`, value);
    });
  });

  action.payload.data?.experience?.forEach((experience, index) => {
    Object.entries(experience).forEach(([key, value]) => {
      console.log("Key:", key);
      console.log("Value:", value);

      if (key === "technologyEnvironment") {
        if (Array.isArray(value)) {
          value.forEach((item, i) => {
            console.log("Item:", item);

            if (typeof item === "object" && item !== null) {
              console.log("Item Value:", item.value);
              formData.append(`experience[${index}].${key}[${i}]`, item.title);
            } else {
              console.log("Item:", item);
              formData.append(`experience[${index}].${key}[${i}]`, item);
            }
          });
        } else {
          formData.append(`experience[${index}].${key}`, value);
        }
      } else {
        formData.append(`experience[${index}].${key}`, value);
      }
    });
  });

  action.payload.data?.project?.forEach((project, index) => {
    Object.entries(project).forEach(([key, value]) => {
      formData.append(`project[${index}].${key}`, value);
    });
  });

  action.payload.data?.certification?.forEach((certification, index) => {
    Object.entries(certification).forEach(([key, value]) => {
      formData.append(`certification[${index}].${key}`, value);
    });
  });

  action.payload.data?.skill?.forEach((skill, index) => {
    formData.append(`skills.skillName[${index}]`, skill.skillName);
  });

  try {
    const response = yield call(makeApiRequest, {
      endpoint: `/edit-resume/${action.payload.id}`,
      method: "PUT",
      data: formData,
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
        "Content-Type": "multipart/form-data", // Set the content-type header
      },
    });
    yield put({
      type: EDIT_CONSULTANT_REQUEST_REDUCER,
      payload: response.data,
    });
    toast.success("Profile Updated Successfully");
  } catch (error) {
    console.log("API call error:", error);
    toast.error("API call error:", error);
    yield put({ type: EDIT_CONSULTANT_FAILURE_REDUCER, payload: error });
  }
}

export default function* watchEditResumeProfile() {
  yield takeLatest(EDIT_CONSULTANT_SUCCESS_REDUCER, editResumeProfile);
}
