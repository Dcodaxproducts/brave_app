import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  string: '',
  isLoading: false,
  error: null,
};

const DocumentsSlice = createSlice({
  name: 'Documents',
  initialState,
  reducers: {
    documentsRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    documentsSuccess(state, action) {
      state.isLoading = false;
      state.string = action.payload;
      state.error = null;
    },
    documentsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { documentsRequest, documentsSuccess, documentsFailure } = DocumentsSlice.actions;
export default DocumentsSlice.reducer;