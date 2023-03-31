import { createAsyncThunk } from '@reduxjs/toolkit';
import { feesRequest, feesSuccess, feesFailure } from '../FeesSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

export const GetFees = createAsyncThunk('Fees/GetFees', async (_, thunkAPI) => {

    const state: any = thunkAPI.getState();
    const token = state.AuthReducer.user.token;

    thunkAPI.dispatch(feesRequest());

    try {
        const response = await axios.get(config.baseUrl + 'fees' ,{
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });
        thunkAPI.dispatch(feesSuccess(response.data.data.content));

    } catch (error: any) {
        console.log(error)
        if (error.response.status == 500) {
            thunkAPI.dispatch(feesFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else {
            thunkAPI.dispatch(feesFailure('Something Went Wrong.'));
            Toast.show({
                type: 'error',
                text1:error.response.data.data,
            })
        }
    }

});