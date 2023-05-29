import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  editorContent: null,
  modalValues: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    resetModal: (state) => {
      state.fullName = '';
      state.email = '';
      state.phoneNumber = '';
      state.editorContent = null;
      state.modalValues = null;
    },
  },
});

export const { updateField, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
