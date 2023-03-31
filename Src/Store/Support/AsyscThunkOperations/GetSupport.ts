import { createAsyncThunk } from '@reduxjs/toolkit';
import { supportRequest, supportSuccess, supportFailure } from '../SupportSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

export const GetSupport = createAsyncThunk('Support/GetSupport', async (_, thunkAPI) => {

    const state: any = thunkAPI.getState();
    const token = state.AuthReducer.user.token;

    thunkAPI.dispatch(supportRequest());

    try {
        const response = await axios.get(config.baseUrl + 'support' ,{
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });
        console.log('Support res:', response.data)
        thunkAPI.dispatch(supportSuccess(response.data.data));

    } catch (error: any) {
        console.log(error)
        if (error.response.status == 500) {
            thunkAPI.dispatch(supportFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else {
            thunkAPI.dispatch(supportFailure('Something Went Wrong.'));
            Toast.show({
                type: 'error',
                text1:'Something Went Wrong.',
            })
        }
    }

});