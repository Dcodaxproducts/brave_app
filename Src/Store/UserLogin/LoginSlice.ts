import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeLoginError(state,action){
      state.error=null;
    }
  },
});

export const { loginRequest, loginSuccess, loginFailure,removeLoginError } = LoginSlice.actions;
export default LoginSlice.reducer;