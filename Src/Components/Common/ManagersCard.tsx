import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../Text/AppText';
import colors from '../../Config/colors';

const ManagersCard = (props: {
    title?: string,
    uri?: string,
}): JSX.Element => {
    return (
        <View
            style={{
                width: wp('29.9916'),
            }}
        >

            <Image
                source={{ uri: props.uri }}
                style={{
                    width: '100%',
                    height: hp('13.88')
                }}
                borderRadius={12}
            />

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 12,
                    lineHeight: 15,
                    marginTop: hp('1.388'),
                    textAlign: 'center',
                    color: '#1F1F1F'
                }}
                otherProps={{ numberOfLines: 2 }}
            >
                {props.title}
            </AppText>

            <AppText
                style={{
                    fontFamily: 'Lexend-Light',
                    fontSize: 12,
                    lineHeight: 15,
                    marginTop: hp('1.388') / 2,
                    textAlign: 'center',
                    color: colors.primary
                }}
                otherProps={{ numberOfLines: 2 }}
            >
                Partner
            </AppText>

        </View>
    );
}

export default ManagersCard;
