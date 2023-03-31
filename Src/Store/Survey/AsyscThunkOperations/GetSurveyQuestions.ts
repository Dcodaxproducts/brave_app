import { createAsyncThunk } from '@reduxjs/toolkit';
import { survayQestionRequest, survayQestionSuccess, survayQestionFailure } from '../SurveySlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';


export const GetSurveyQuestions = createAsyncThunk('Survay/GetSurveyQuestions', async (_, thunkAPI) => {

    const state: any = thunkAPI.getState();
    const token = state.AuthReducer.user.token;

    thunkAPI.dispatch(survayQestionRequest());

    try {
        const response = await axios.get(config.baseUrl + 'survey/question/answers', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        thunkAPI.dispatch(survayQestionSuccess(response.data.data));
    } catch (error: any) {
        console.log(error)

        if (error.response.status == 500) {
            thunkAPI.dispatch(survayQestionFailure('Internal Server Error.'));
            Toast.show({
                type: 'error',
                text1: 'Internal Server Error.',
            })
        }
        else {
            thunkAPI.dispatch(survayQestionFailure('Something Went Wrong.'));
            Toast.show({
                type: 'error',
                text1: 'Something Went Wrong.',
            })
        }
       
    }

});