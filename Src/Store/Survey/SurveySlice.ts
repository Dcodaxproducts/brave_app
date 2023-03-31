import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: null,
  isLoading: false,
  error: null,
};

const SurveySlice = createSlice({
  name: 'Survay',
  initialState,
  reducers: {
    survayQestionRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    survayQestionSuccess(state, action) {
      state.isLoading = false;
      state.questions = action.payload;
      state.error = null;
    },
    survayQestionFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    survayPostAnswersSuccess(state, action) {
      state.isLoading = false;
      // state.questions = action.payload;
      state.error = null;
    },
    // removeAuthError(state,action){
    //   state.error=null;
    //   state.isLoading=false;
    // },
    // authLogout(state){
    //   state.error=null;
    //   state.isLoading=false;
    //   state.user=null;
    // }
  },
});

export const { survayQestionRequest, survayQestionSuccess, survayQestionFailure,survayPostAnswersSuccess } = SurveySlice.actions;
export default SurveySlice.reducer;