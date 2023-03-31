import { createAsyncThunk } from '@reduxjs/toolkit';
import { LearnRequest, LearnSuccess,LearnFailure } from '../LearnSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

export const GetLearn = createAsyncThunk('Learn/GetLearn', async (_, thunkAPI) => {

    const state: any = thunkAPI.getState();
    const token = state.AuthReducer.user.token;

    thunkAPI.dispatch(LearnRequest());

    try {
        const response = await axios.get(config.baseUrl + 'learn' ,{
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });
        console.log('Support res:', response.data)
        thunkAPI.dispatch(LearnSuccess(response.data.data));

    } catch (error: any) {
        console.log(error)
        if (error.response.status == 500) {
            thunkAPI.dispatch(LearnFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else {
            thunkAPI.dispatch(LearnFailure('Something Went Wrong.'));
            Toast.show({
                type: 'error',
                text1:'Something Went Wrong.',
            })
        }
    }

});