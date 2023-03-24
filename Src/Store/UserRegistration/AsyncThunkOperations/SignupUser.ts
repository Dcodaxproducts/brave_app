import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signUpRequest, signUpSuccess, signUpFailure } from '../SignupSlice';
import axios from 'axios';
import config from '../../../Config/config';

interface RegistrationFields {
    first_name: string, last_name: string, email: string, password: string, c_password: string
}

export const SignupUser = createAsyncThunk('Signup/SignupUser', async (props: RegistrationFields, thunkAPI) => {

    thunkAPI.dispatch(signUpRequest());

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

        thunkAPI.dispatch(signUpSuccess(response.data));

    } catch (error: any) {
        if (error.response.status == 500) thunkAPI.dispatch(signUpFailure('Internal Server Error.'));
        else if (error.response.status == 400) {
            if (error.response.data.error?.email[0]=='The email has already been taken.') thunkAPI.dispatch(signUpFailure('This email address is already registered.'));
            else thunkAPI.dispatch(signUpFailure('Validation Error'))
        }
        else thunkAPI.dispatch(signUpFailure('Something Went Wrong.'));
    }

});
