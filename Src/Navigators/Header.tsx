import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderIconCont = (props: { icon?: string, onPress?: () => void }) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                width: wp('11.6634'),
                height: wp('11.6634'),
                borderRadius: wp('2.777'),
                backgroundColor: props.icon ? colors.foreground : undefined,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: props.icon ? 15 : undefined,
            }}
        >

            {props.icon &&
                <Icon
                    name={props.icon}
                    size={hp('3.25%')}
                    color={colors.dark}
                />
            }

        </TouchableOpacity>
    );
}

const Header = (props: {
    title: string,
    rightIcon?: string,
    rightIconOnpress?: () => void,
    leftIcon?: string,
    leftIconOnpress?: () => void,
    isTitleKurale?: boolean
}) => {
    return (
        <View style={[styles.container, {}]}>

            <HeaderIconCont
                icon={props.leftIcon}
                onPress={props.leftIconOnpress}
            />

            <View
                style={{ flexGrow: 1 }}
            >

                <AppText
                    style={props.isTitleKurale ?
                        {
                            fontFamily: 'Kurale-Regular',
                            fontSize: 30,
                            alignSelf: 'center'
                        }
                        :
                        {
                            fontFamily: 'Lexend-SemiBold',
                            fontSize: 22,
                            lineHeight: 27.5,
                            alignSelf: 'center'
                        }
                    }
                >
                    {props.title}
                </AppText>

            </View>

            <HeaderIconCont
                icon={props.rightIcon}
                onPress={props.rightIconOnpress}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp('10%'),
        // height:hp('16.656'),
        // paddingBottom:hp('5.552'),
        paddingHorizontal: wp('5.555%'),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'transparent'
    },
});

export default Header;
