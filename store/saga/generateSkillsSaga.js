import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../type/generateSkillsType";
import {
  GENERATE_SKILLS_SAVE_FAILURE,
  GENERATE_SKILLS_SAVE_SUCCESS,
  GENERATE_SKILLS_SAVE_LOADING,
} from "store/type/generateSkillsType";

import { makeApiRequest } from "../../utils/api";

function* saveGenerateSkills(action) {
//   const data = {
//     jobTitle: action.payload.jobTitle,
//     experience: action.payload.experience,
//     jobType: action.payload.jobType,
//   };
  console.log(action,'djdfhhfue')
  try {
    yield put({ type: GENERATE_SKILLS_SAVE_LOADING });
    
    const response = yield call(makeApiRequest, {
      endpoint: "/generate-skills",
      method: "POST",
      data: action.payload.jobFields,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${action.payload.accessToken}`,
      },
    });

    yield put({ type: GENERATE_SKILLS_SAVE_SUCCESS, payload: response.data });
    console.log("test in saga", response.data);
  } catch (error) {
    console.log("API call error:", error);

    yield put({ type: GENERATE_SKILLS_SAVE_FAILURE, payload: error });
  }
}

export default function* watchGenerateSkillsRequest() {
  yield takeLatest(types.GENERATE_SKILLS_SAVE_REQUEST, saveGenerateSkills);
}
