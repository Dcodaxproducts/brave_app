import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null as {}|null,
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
      state.isLoading=false;
    },
    authLogout(state){
      state.error=null;
      state.isLoading=false;
      state.user=null;
    },
    authSurveyCompleted(state){
      const tempUser=state.user;
      state.user={...tempUser, survey_complete:'Yes'}
    }
  },
});

export const { authRequest, authSuccess, authFailure,removeAuthError,authLogout, authSurveyCompleted } = AuthSlice.actions;
export default AuthSlice.reducer;