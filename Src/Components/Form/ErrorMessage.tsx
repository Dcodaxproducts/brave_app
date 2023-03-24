import React from 'react'
import {View, StyleSheet} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import AppText from '../Text/AppText';

export default function ErrorMessage(props:{error:string | string[], visible:boolean, marginBottom:number | undefined}){
    if(!props.visible || !props.error) return null;
  return (
    <View >
        <AppText style={{
            color:'red',
            marginBottom:props.marginBottom,
            fontSize:12
        }}>
            {props.error}
        </AppText>
    </View>
  );
}