import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  string: '',
  isLoading: false,
  error: null,
};

const FeesSlice = createSlice({
  name: 'Fees',
  initialState,
  reducers: {
    feesRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    feesSuccess(state, action) {
      state.isLoading = false;
      state.string = action.payload;
      state.error = null;
    },
    feesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { feesRequest, feesSuccess, feesFailure } = FeesSlice.actions;
export default FeesSlice.reducer;