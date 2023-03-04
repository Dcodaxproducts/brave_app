import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shadow } from 'react-native-shadow-2';

const SelectionCard = (props: {
    title?: string,
    subTitle?: string
    svgComp?: ReactNode
}) => {
    return (
        <Shadow
            distance={20}
            startColor={colors.shadowDrop}
            // endColor={colors.foreground}
            // offset={[5, 20]}
            style={{
                width:'100%',
                marginBottom: hp('1.388')
            }}
        >

            <TouchableOpacity
                style={{
                    padding: wp('2.777'),
                    backgroundColor: colors.foreground,
                    borderRadius: 15,
                    flexDirection: 'row',
                    
                }}
            >

                <View
                    style={{
                        width: wp('13.3296'),
                        height: wp('13.3296'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.background,
                        borderRadius: 12,
                    }}
                >

                    {props.svgComp}

                </View>

                <View
                    style={{
                        paddingVertical: hp('0.5552'),
                        justifyContent: 'space-between',
                        marginHorizontal: wp('3.0547'),
                        flexGrow: 1
                    }}
                >

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 16,
                            lineHeight: 16,
                        }}
                    >
                        {props.title}
                    </AppText>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Light',
                            fontSize: 14,
                            lineHeight: 17.5,
                            color: '#8A8787'
                        }}
                    >
                        {props.subTitle}
                    </AppText>

                </View>

                <Icon
                    name='chevron-right'
                    size={hp('3.75')}
                    color={colors.dark}
                    style={{ alignSelf: 'center' }}
                />

            </TouchableOpacity>
        </Shadow>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default SelectionCard;
