import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    authRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    authFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeAuthError(state,action){
      state.error=null;
    }
  },
});

export const { authRequest, authSuccess, authFailure,removeAuthError } = AuthSlice.actions;
export default AuthSlice.reducer;