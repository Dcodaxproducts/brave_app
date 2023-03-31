import { createAsyncThunk } from '@reduxjs/toolkit';
import { documentsRequest, documentsSuccess, documentsFailure } from '../DocumentsSlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

export const GetDocuments = createAsyncThunk('Documents/GetDocuments', async (_, thunkAPI) => {

    const state: any = thunkAPI.getState();
    const token = state.AuthReducer.user.token;

    thunkAPI.dispatch(documentsRequest());

    try {
        const response = await axios.get(config.baseUrl + 'documents' ,{
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });
        console.log('Documets res:', response.data)
        thunkAPI.dispatch(documentsSuccess(response.data.data));

    } catch (error: any) {
        console.log(error)
        if (error.response.status == 500) {
            thunkAPI.dispatch(documentsFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else {
            thunkAPI.dispatch(documentsFailure('Something Went Wrong.'));
            Toast.show({
                type: 'error',
                text1:'Something Went Wrong.',
            })
        }
    }

});