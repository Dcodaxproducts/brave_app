import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppButton from '../Components/Common/AppButton';
import AppField from '../Components/Fields/AppField';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';
import ScreenStyle from '../Config/Styles/common/ScreenStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const ForgotPaswordScreen = () => {

    const navigation:NavigationProp<ParamListBase>=useNavigation();

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['rgba(79, 64, 255, 0.15)', 'rgba(79, 64, 255, 0)']}
                style={{
                    height: hp('16.7%'),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Text
                    style={{
                        fontFamily: 'Kurale-Regular',
                        fontSize: 60,
                        color: colors.dark,
                    }}
                >
                    Brave
                </Text>

            </LinearGradient>

            <View
                style={{
                    marginHorizontal: ScreenStyle.paddingHorizontal,
                    marginBottom: ScreenStyle.paddingVertical,
                    flex: 1,
                    justifyContent: 'center'
                }}
            >

                <AppText
                    style={{
                        fontFamily: 'Lexend-Bold',
                        fontSize: 25,
                        lineHeight: 31.5,
                        // marginTop: hp('2')
                    }}
                >
                    Forgot password?
                </AppText>

                <AppText
                    style={{
                        fontSize: 16,
                        lineHeight: 20,
                        color: colors.fontLighBlack,
                        marginTop: hp('1.6656')
                    }}
                >
                    No worries, we’ll send you reset instructions.
                </AppText>

                <AppField
                    fieldName='Email'
                    placeholder='Email'
                    containerStyle={{
                        marginTop: hp('4.0252')
                    }}
                    value={'johndeo.20@gmail.com '}
                    otherProps={{ editable: false }}
                />

                <AppButton
                    title='Reset'
                    style={{
                        marginTop: hp('2.3596'),
                        width:'85%',
                        alignSelf:'center'
                    }}
                />

                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: hp('4.164')
                    }}
                >

                        <Icon
                            name='arrow-back'
                            color={'#667085'}
                            size={22}
                            style={{
                                marginRight: wp('2.5')
                            }}
                        />

                        <AppText
                            style={{
                                fontFamily: 'Lexend-Medium',
                                fontSize: 14,
                                lineHeight: 20,
                                color: '#667085'
                            }}
                        >
                            Back to log in
                        </AppText>

                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ForgotPaswordScreen;
