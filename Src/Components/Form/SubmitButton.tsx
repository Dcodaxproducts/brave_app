import React,{ReactNode } from 'react';
import { View,ViewStyle,TextStyle,} from 'react-native';
import {useFormikContext} from 'formik';
import AppButton from '../Common/AppButton';

interface AppButtonProps{
    title: string;
    style?: ViewStyle,
    textStyle?: TextStyle,
    iconComp?: ReactNode,
    isSec?:boolean,
    isTur?:boolean,
    // onPress?:()=>void,
}

const SubmitButton = (props:AppButtonProps) => {
    const {handleSubmit}= useFormikContext();
  return(
    <AppButton 
            onPress={handleSubmit}
            {...props}
        />
  );
}

export default SubmitButton;