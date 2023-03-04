import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';

const ScreenContainer = (props:{
    children:ReactNode
}) => {
    return (
        <ScrollView style={styles.container}>
            {props.children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:colors.foreground,
        paddingTop:hp('4.858%'),
        paddingHorizontal:wp('5.554%'),
        elevation:80,
    },
});

export default ScreenContainer;
