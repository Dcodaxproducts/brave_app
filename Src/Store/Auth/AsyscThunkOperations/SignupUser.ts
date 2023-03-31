import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authRequest, authSuccess, authFailure } from '../AuthSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

interface RegistrationFields {
    first_name: string, last_name: string, email: string, password: string, c_password: string
}

export const SignupUser = createAsyncThunk('Auth/SignupUser', async (props: RegistrationFields, thunkAPI) => {

    console.log('PROPS: ', props)

    thunkAPI.dispatch(authRequest());

    try {
        const response = await axios.post(config.baseUrl + 'register', {
            first_name: props.first_name,
            last_name: props.last_name,
            email: props.email,
            password: props.password,
            c_password: props.password,
            image: '',
            birthday: '',
            address_line_1: '',
            address_line_2: '',
            city: '',
            state: '',
            zip_code: '',
            country: '',
        });

        thunkAPI.dispatch(authSuccess({ token: response.data.data.token, ...response.data.data.user }));

    } catch (error: any) {
        console.log('errorrr: ', error)
        console.log('errorrr: ', error.response.data)
        if (error.response.status == 500) {
            thunkAPI.dispatch(authFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else if (error.response.status == 400) {
            if (error.response.data.error?.email[0] == 'The email has already been taken.') {
                thunkAPI.dispatch(authFailure('This email address is already registered.'));
                Toast.show({
                    type: 'error',
                    text1: 'This email address is already registered.',
                })
            }
            else {
                thunkAPI.dispatch(authFailure('Validation Error'));
                Toast.show({
                    type: 'error',
                    text1: 'Validation Error',
                })
            }
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
