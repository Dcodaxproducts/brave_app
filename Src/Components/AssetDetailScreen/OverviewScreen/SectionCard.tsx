import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../Config/colors';
import AppText from '../../Text/AppText';

const SectionCard = (props:{
    title?:string,
    subTitle?:string
}) => {
    // console.log(wp('40.2665'))
    return (
        <View style={styles.container}>

            <AppText
                style={{
                    fontFamily: 'Lexend-Medium',
                    fontSize: 20,
                    lineHeight: 30,
                }}
            >
                {props.title}
            </AppText>

            <AppText
                style={{
                    lineHeight:15,
                    color:colors.primary,
                    marginTop:hp('0.694')
                }}
            >
                {props.subTitle}
            </AppText>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:wp('43.0435'),
        marginBottom:wp('2.805'),
        height:hp('11.104'),
        backgroundColor:colors.background,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.border,
        paddingHorizontal:wp('4.155'),
        justifyContent:'center'
    },
});

export default SectionCard;
