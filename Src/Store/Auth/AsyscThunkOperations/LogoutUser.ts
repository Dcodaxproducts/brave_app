import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import config from '../../../Config/config';
import { authFailure, authLogout, authRequest } from '../AuthSlice';

export const LogoutUser = createAsyncThunk('Auth/LogoutUser', async (_, thunkAPI) => {

    const state: any = thunkAPI.getState();
    const token = state.AuthReducer.user.token;
    console.log(token)

    thunkAPI.dispatch(authRequest());

    try {
        await axios.post(config.baseUrl + 'logout', {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });

        await AsyncStorage.removeItem('userSessionKey');

        thunkAPI.dispatch(authLogout());

    } catch (error: any) {
        
        console.log(error.response.status==401)
        console.log(error)
        
        if (error.response.status == 401) {

            await AsyncStorage.removeItem('userSessionKey');

            thunkAPI.dispatch(authLogout());

        }
        else {

            thunkAPI.dispatch(authFailure('Something Went Wrong.'));
            Toast.show({
                type: 'error',
                text1: 'Something Went Wrong.',
            })

        }

    }

});