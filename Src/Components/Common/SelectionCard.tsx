import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shadow } from 'react-native-shadow-2';
import { ViewStyle } from 'react-native';
import { TextStyle } from 'react-native';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';

const SelectionCard = (props: {
    title?: string,
    subTitle?: string
    svgComp?: ReactNode,
    onPress?: () => void,
    containerSyle?:ViewStyle,
    iconContainerStyle?:ViewStyle,
    titleStyle?:TextStyle,
    subTitleStyle?:TextStyle,
    marginBottom?:number,
    disableShadow?:boolean
}) => {
    return (
        <Shadow
            distance={ 20}
            startColor={ colors.shadowDrop}
            disabled={props.disableShadow ? true :false}
            // endColor={colors.foreground}
            // offset={[5, 20]}
            style={!props.disableShadow && {
                width: '100%',
                marginBottom:props.marginBottom ? props.marginBottom :  hp('1.388'),
            }}
        >

            <TouchableOpacity
                style={[{
                    padding: wp('2.777'),
                    backgroundColor: colors.foreground,
                    borderRadius: 15,
                    flexDirection: 'row',
                }, props.containerSyle]}
                onPress={props.onPress}
            >

                <View
                    style={[{
                        width: wp('13.3296'),
                        height: wp('13.3296'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.background,
                        borderRadius: 12,
                    }, props.iconContainerStyle]}
                >

                    {props.svgComp}

                </View>

                <View
                    style={{
                        paddingVertical: hp('0.5552'),
                        justifyContent: !props.subTitle ? 'center' : 'space-between',
                        marginHorizontal: wp('3.0547'),
                        flexGrow: 1,
                    }}
                >

                    <AppText
                        style={[{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 16,
                            lineHeight: 16,
                        },props.titleStyle]}
                    >
                        {props.title}
                    </AppText>

                    {props.subTitle &&
                        <AppText
                            style={[{
                                fontFamily: 'Lexend-Light',
                                fontSize: 14,
                                lineHeight: 17.5,
                                color: '#8A8787'
                            }, props.subTitleStyle]}
                        >
                            {props.subTitle}
                        </AppText>
                    }

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
