import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../Store/Auth/AuthSlice';
import SurveyReducer from './Survey/SurveySlice';
import FeesReducer from './Fees/FeesSlice';
import DocumentsReducer from './Documents/DocumentsSlice';
import SupportReducer from './Support/SupportSlice';
import LearnReducer from './Learn/LearnSlice';

const reducers = combineReducers({
  AuthReducer,
  SurveyReducer,
  FeesReducer,
  DocumentsReducer,
  SupportReducer,
  LearnReducer
})

export const store = configureStore({
  reducer: reducers,
})