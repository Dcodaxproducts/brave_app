import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  string: '',
  isLoading: false,
  error: null,
};

const LearnSlice = createSlice({
  name: 'Learn',
  initialState,
  reducers: {
    LearnRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    LearnSuccess(state, action) {
      state.isLoading = false;
      state.string = action.payload;
      state.error = null;
    },
    LearnFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { LearnRequest, LearnSuccess, LearnFailure } = LearnSlice.actions;
export default LearnSlice.reducer;