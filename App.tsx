import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import StackNav from './Src/Navigators/StackNav';
import Theme from './Src/Navigators/Theme';
import Toast from 'react-native-toast-message';
import LoadingCard from './Src/Components/Common/LoadingCard';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const isLoading = useSelector((state: any) => state.AuthReducer.isLoading);

  return (
    <>

      <NavigationContainer theme={Theme}>
        <StackNav />
      </NavigationContainer>

      <Toast
        position='top'
      />

      <Modal
        visible={isLoading}
        animationType={'fade'}
        transparent
      >

        <LoadingCard />

      </Modal>

    </>
  );
};

export default App;
