import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import AppText from '../Text/AppText';
import colors from '../../Config/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ViewStyle } from 'react-native';
import { TextStyle } from 'react-native';


const AppButton = (props: {
    title: string;
    style?: ViewStyle,
    textStyle?: TextStyle,
    iconComp?: ReactNode,
    isSec?:boolean,
    isTur?:boolean,
    onPress?:()=>void,
}) => {

    return (

        <TouchableOpacity
            onPress={props.onPress}
            style={[{
                alignItems: props.iconComp  ? undefined : 'center',
                backgroundColor: colors.dark,
                height:hp('7.8%'),
                borderRadius: 12,
                flexDirection: props.iconComp  ? 'row' : undefined,
                justifyContent:props.iconComp ? 'space-between' : 'center',
            }, 
            props.isSec ? {
                width:wp('69.1473%'),
                height:hp('6.94%'),
                alignSelf:'center',
            }:
            undefined,props.style, 
        ]}
        >
            {props.iconComp &&
                <View
                    style={{
                        width: wp('15%'),
                        alignSelf:'center',
                        alignItems:'center'
                    }}
                >

                    {props.iconComp}

                </View>
            }

            <AppText
                style={[{
                    fontSize: 18,
                    fontFamily: 'Lexend-Bold',
                    color: colors.foreground,
                    alignSelf:props.iconComp ? 'center' :undefined ,
                    ...props.textStyle
                }, props.isSec ? 
                {
                    fontFamily:'Lexend-SemiBold',
                    fontSize:16
                }
                :
                {}
            ]}
            >
                {props.title} 
            </AppText>

            {props.iconComp &&
                <View
                    style={{
                        width: wp('15%'),
                    }}
                />
            }

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {


    },
});

export default AppButton;
