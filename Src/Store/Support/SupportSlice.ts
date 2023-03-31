import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  string: '',
  isLoading: false,
  error: null,
};

const SupportSlice = createSlice({
  name: 'Support',
  initialState,
  reducers: {
    supportRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    supportSuccess(state, action) {
      state.isLoading = false;
      state.string = action.payload;
      state.error = null;
    },
    supportFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { supportRequest, supportSuccess, supportFailure } = SupportSlice.actions;
export default SupportSlice.reducer;