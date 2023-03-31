import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import LoadingCard from './Src/Components/Common/LoadingCard';
import StackNav from './Src/Navigators/StackNav';
import Theme from './Src/Navigators/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSuccess } from './Src/Store/Auth/AuthSlice';

const App = () => {

  const authLoading = useSelector((state: any) => state.AuthReducer.isLoading);
  const user = useSelector((state: any) => state.AuthReducer.user);
  const surveyLoading = useSelector((state: any) => state.SurveyReducer.isLoading);
  const FeesLoading = useSelector((state: any) => state.FeesReducer.isLoading);
  const DocumentsLoading = useSelector((state: any) => state.DocumentsReducer.isLoading);
  const SupportLoading = useSelector((state: any) => state.SupportReducer.isLoading);
  const LearnLoading = useSelector((state: any) => state.LearnReducer.isLoading);

  const dispatch=useDispatch<any>();

  useEffect(() => {
    storeUserSession();
  }, [user])

  useEffect(()=>{
    getUserSession();
  },[])

  const storeUserSession = async () => {
    if (user) {
      await AsyncStorage.setItem('userSessionKey', JSON.stringify(user));
      console.log("USER_SESSION_STORED_SUCCESSFULLY")
    }
  }

  const getUserSession = async () => {
    const value:any = await AsyncStorage.getItem('userSessionKey')
    const parse = JSON.parse(value)
    if (parse != null) {
      dispatch(authSuccess(parse));
      console.log("USER_SESSION_GET_SUCCESSFULLY")
    }
  }

  return (
    <>

      <NavigationContainer theme={Theme}>
        <StackNav />
      </NavigationContainer>

      <Toast
        position='top'
        visibilityTime={2750}
      />

      <Modal
        visible={
          authLoading && true ||
          surveyLoading && true ||
          FeesLoading && true ||
          DocumentsLoading && true ||
          SupportLoading && true ||
          LearnLoading && true
        }
        animationType={'fade'}
        transparent
      >

        <LoadingCard />

      </Modal>

    </>
  );
};

export default App;
