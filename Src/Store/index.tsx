import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../Store/Auth/AuthSlice';

const reducers = combineReducers({
  AuthReducer
})

export const store = configureStore({
  reducer: reducers,
})