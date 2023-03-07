
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import StackNav from './Src/Navigators/StackNav';
import Theme from './Src/Navigators/Theme';

const App = () => {
  return (

    <NavigationContainer theme={Theme}>
      <StackNav/>
    </NavigationContainer>
      
  );
};

export default App;
