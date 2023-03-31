import { createAsyncThunk } from '@reduxjs/toolkit';
import { survayQestionRequest,survayPostAnswersSuccess, survayQestionFailure } from '../SurveySlice';
import axios from 'axios';
import config from '../../../Config/config';
import Toast from 'react-native-toast-message';

interface SurveyAnswerObj {
    question_id?: string,
    answer?: string
}


export const PostSurveyAnswers = createAsyncThunk('Survay/PostSurveyAnswers', async (answers: SurveyAnswerObj[], thunkAPI) => {

    const state: any = thunkAPI.getState();
    const token = state.AuthReducer.user.token;

    const data={
        user_id:state.AuthReducer.user.id,
        question_answers:answers
    }

    thunkAPI.dispatch(survayQestionRequest());

    try {
        const response = await axios.post(config.baseUrl + 'create/user/survey', data ,{
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });
        thunkAPI.dispatch(survayPostAnswersSuccess(response.data.data));
        return {isSuccess:true}

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
                text1:'Something Went Wrong.',
            })
        }
        return {isSuccess:false}
    }

});