import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, TextStyle, TextComponent, TextProps } from 'react-native';
import colors from '../../Config/colors';

const AppText = (props:{
    children?: string | number,
    style?:TextStyle | TextStyle[],
    otherProps?:TextProps,
    type?:string
}) => {

    var STYLE:TextStyle={
        color: colors.dark,
        fontFamily: 'Lexend-Regular',
        fontSize:12,
    }

    if(props.type=='title'){
        var STYLE:TextStyle={
            color: colors.dark,
            fontFamily: 'Lexend-SemiBold',
            fontSize:20,
        }
    }

    props.type 

    return (
        <Text
            style={[STYLE, props.style]}
            {...props.otherProps}
        >
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
});

export default AppText;