import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import SignupReducer from './UserRegistration/SignupSlice';
import LoginReducer from './UserLogin/LoginSlice';

const reducers = combineReducers({
  SignupReducer,
  LoginReducer
})

export const store = configureStore({
  reducer: reducers,
})