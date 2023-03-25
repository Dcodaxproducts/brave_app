import { createAsyncThunk } from '@reduxjs/toolkit';
import { authRequest, authSuccess, authFailure } from '../AuthSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

interface LoginFields {
    email: string, password: string
}

export const LoginUser = createAsyncThunk('Auth/LoginUser', async (props: LoginFields, thunkAPI) => {

    thunkAPI.dispatch(authRequest());

    console.log('PROPS: ', props)

    try {
        const response = await axios.post(config.baseUrl + 'login', {
            email: props.email,
            password: props.password
        });
        thunkAPI.dispatch(authSuccess({token:response.data.data.token, ...response.data.data.user}));

    } catch (error: any) {
        console.log(error)
        if (error.response.status == 500) {
            thunkAPI.dispatch(authFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else if (error.response.status == 404) {
            thunkAPI.dispatch(authFailure('Invalid Credentials'));
            Toast.show({
                type: 'error',
                text1: 'Invalid Credentials',
            })
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