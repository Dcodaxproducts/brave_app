import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const SignupSlice = createSlice({
  name: 'Signup',
  initialState,
  reducers: {
    signUpRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    signUpFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeSignupError(state,action){
      state.error=null;
    }
  },
});

export const { signUpRequest, signUpSuccess, signUpFailure,removeSignupError } = SignupSlice.actions;
export default SignupSlice.reducer;
