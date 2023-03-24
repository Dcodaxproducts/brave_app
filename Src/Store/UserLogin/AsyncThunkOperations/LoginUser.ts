import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest, loginSuccess, loginFailure } from '../LoginSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

interface LoginFields {
    email: string, password: string
}

export const LoginUser = createAsyncThunk('Login/LoginUser', async (props: LoginFields, thunkAPI) => {

    thunkAPI.dispatch(loginRequest());

    console.log('PROPS: ', props)

    try {
        const response = await axios.post(config.baseUrl + 'login', {
            email: props.email,
            password: props.password
        });
        console.log(response.data)
        thunkAPI.dispatch(loginSuccess(response.data));

    } catch (error: any) {
        console.log(error)
        if (error.response.status == 500) {
            thunkAPI.dispatch(loginFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else if (error.response.status == 404) {
            thunkAPI.dispatch(loginFailure('Invalid Credentials'));
            Toast.show({
                type: 'error',
                text1: 'Invalid Credentials',
            })
        }
        else {
            thunkAPI.dispatch(loginFailure('Something Went Wrong.'));
            Toast.show({
                type: 'error',
                text1: 'Something Went Wrong.',
            })
        }
    }

});