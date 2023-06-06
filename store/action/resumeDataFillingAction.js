import {RESUME_DATA} from "../type/resumeDataFillingType";

export const resumeDataFillingAction = (resumeData) => {
  return{
    type: RESUME_DATA,
    payload: resumeData,
  };
};
