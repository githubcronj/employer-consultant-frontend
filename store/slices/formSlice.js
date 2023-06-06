import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phoneNo: "",
  gender: "",
  dateOfBirth: "",
  location: "",
  jobRole: "",
  highestEducationLevel: "",
  institutionName: "",
  degree: "",
  yearOfPassing: "",
  companyName: "",
  jobPosition: "",
  employementType: "",
  dateofJoined: "",
  skills: "",
  projectName: "",
  projectUrl: "",
  startAndEndDate: "",
  projectDescription: "",
  technologyEnvironment: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearFields: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = "";
      });
    },
  },
});

export const { updateField, clearFields } = formSlice.actions;
export default formSlice.reducer;
