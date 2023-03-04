
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import AppText from '../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '../../Config/colors';
import { Shadow } from 'react-native-shadow-2';

const FAQsCard = (props: {
    title?: string,
    onPress?: () => void,
    style?: ViewStyle
}) => {
    return (

        <Shadow
            distance={20}
            startColor={colors.shadowDrop}
            // endColor={colors.foreground}
            // offset={[5, 20]}
            style={{
                width: '100%',
                marginBottom: hp('1.388')
            }}
        >

            <TouchableOpacity
                onPress={props.onPress}
                style={[{
                    paddingVertical: hp('2.2208'),
                    paddingHorizontal: wp('4.1655'),
                    backgroundColor: colors.foreground,
                    borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // marginBottom: hp('1.388'),
                    // elevation:50,
                    // shadowColor:colors.background
                }, props.style]}
            >

                <AppText
                    style={{
                        fontSize: hp('1.9432'),
                        lineHeight: 20,
                    }}
                >
                    {props.title}
                </AppText>

                <Icon
                    name='chevron-right'
                    color={colors.dark}
                    size={hp('3')}
                    style={{ alignSelf: 'center' }}
                />

            </TouchableOpacity>

        </Shadow>
    );
};

export default FAQsCard;
