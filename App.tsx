import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import StackNav from './Src/Navigators/StackNav';
import Theme from './Src/Navigators/Theme';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>

      <NavigationContainer theme={Theme}>
        <StackNav />
      </NavigationContainer>

      <Toast
        position='top'
      />
      
    </>
  );
};

export default App;
