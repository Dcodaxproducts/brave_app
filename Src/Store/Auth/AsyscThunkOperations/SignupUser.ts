import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authRequest, authSuccess, authFailure } from '../AuthSlice';
import axios from 'axios';
import config from '../../../Config/config';

interface RegistrationFields {
    first_name: string, last_name: string, email: string, password: string, c_password: string
}

export const SignupUser = createAsyncThunk('Auth/SignupUser', async (props: RegistrationFields, thunkAPI) => {

    thunkAPI.dispatch(authRequest());

    try {
        const response = await axios.post(config.baseUrl + 'register', {
            first_name: props.first_name,
            last_name: props.last_name,
            email: props.email,
            password: props.password,
            c_password: props.password,
            image:'',
            birthday:'',
            address_line_1:'',
            address_line_2:'',
            city:'',
            state:'',
            zip_code:'',
            country:'',
        });

        thunkAPI.dispatch(authSuccess({token:response.data.data.token, ...response.data.data.user}));

    } catch (error: any) {
        if (error.response.status == 500) thunkAPI.dispatch(authFailure('Internal Server Error.'));
        else if (error.response.status == 400) {
            if (error.response.data.error?.email[0]=='The email has already been taken.') thunkAPI.dispatch(authFailure('This email address is already registered.'));
            else thunkAPI.dispatch(authFailure('Validation Error'))
        }
        else thunkAPI.dispatch(authFailure('Something Went Wrong.'));
    }

});
