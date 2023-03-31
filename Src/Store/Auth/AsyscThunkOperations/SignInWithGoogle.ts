import { createAsyncThunk } from '@reduxjs/toolkit';
import { authRequest, authSuccess, authFailure } from '../AuthSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

interface LoginFields {
    email: string,
    first_name?: string | null,
    last_name?: string | null,
    google_id?: string | null,
    image_url?: string | null
}

export const SignInWithGoogle = createAsyncThunk('Auth/SignInWithGoogle', async (props: LoginFields, thunkAPI) => {

    thunkAPI.dispatch(authRequest());

    try {
        const response = await axios.post(config.baseUrl + 'signin/google/callback', {
            email: props.email,
            first_name: props.first_name,
            last_name: props.last_name,
            google_id: props.google_id,
            image_url: props.image_url
        });

        thunkAPI.dispatch(authSuccess({ token: response.data.data.token, ...response.data.data.user }));

    } catch (error: any) {
        console.log(error.response.data.message)
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