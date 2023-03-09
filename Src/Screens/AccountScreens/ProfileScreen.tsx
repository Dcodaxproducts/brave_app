import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';
import BackgroundSvg from '../../Assets/svgs/Account/Profile/background.svg';
import { Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Shadow } from 'react-native-shadow-2';
import AppText from '../../Components/Text/AppText';
import AppField from '../../Components/Fields/AppField';
import colors from '../../Config/colors';
import ImportSvg from '../../Assets/svgs/Account/Profile/import.svg';
import AppButton from '../../Components/Common/AppButton';

const ProfileScreen = () => {
    return (

        <ScrollView>

            <View style={[ScreenStyle, { overflow: 'hidden', marginBottom: -ScreenStyle.paddingVertical }]}>

                <BackgroundSvg
                    style={{
                        marginHorizontal: -ScreenStyle.paddingHorizontal,
                        marginTop: -ScreenStyle.paddingVertical,
                    }}
                />

                <Shadow
                    distance={10}
                    startColor={'rgba(16, 24, 40, 0.05)'}
                    // endColor={'rgba(16, 24, 40, 0.05)'}
                    offset={[0, 12]}
                    containerStyle={{
                        marginTop: -hp('5'),
                    }}
                >
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }}
                        style={{
                            width: wp('26.6592'),
                            height: wp('26.6592'),
                            borderRadius: 200,

                            borderWidth: 4,
                            borderColor: '#FFFFFF',
                        }}
                    />
                </Shadow>

                <AppText
                    style={{
                        fontFamily: 'Lexend-Medium',
                        fontSize: 24,
                        lineHeight: 32,
                        marginTop: hp('2')
                    }}
                >
                    Olivia Rhye
                </AppText>

                <AppText
                    style={{
                        // fontFamily: 'Lexend-Medium',
                        fontSize: 16,
                        lineHeight: 24,
                        marginTop: hp('0.5552'),
                        color: '#667085'
                    }}
                >
                    olivia@untitledui.com
                </AppText>

                <View
                    style={{
                        backgroundColor: '#F9FAFB',
                        marginTop: hp('4.4416'),
                        marginHorizontal: -ScreenStyle.paddingHorizontal,
                        paddingHorizontal: ScreenStyle.paddingHorizontal,

                    }}
                >

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 14,
                            lineHeight: 20,
                            color: '#344054',

                        }}
                    >
                        Personal info
                    </AppText>

                    <AppText
                        style={{
                            fontSize: 14,
                            lineHeight: 20,
                            color: '#667085',
                        }}
                    >
                        Update your photo and personal details.
                    </AppText>

                    <View
                        style={{
                            backgroundColor: colors.foreground,
                            paddingHorizontal: wp('4.4432'),
                            paddingVertical: hp('2.776'),
                            marginTop: hp('2.776'),
                            borderRadius: 10,
                            marginBottom: ScreenStyle.paddingVertical,
                            flex: 1,
                            borderWidth: 1,
                            borderColor: '#E4E7EC',
                        }}
                    >

                        <AppField
                            fieldName='First Name'
                            titleColor='#344054'
                            containerStyle={{ marginBottom: hp('3.3312') }}
                            textInputHeight={hp('6.1072')}
                            titleStyle={{ fontSize: 14, marginBottom: hp('0.8328') }}
                            textInputStyle={{ paddingHorizontal: wp('3') }}
                            value='Oliva'
                        />

                        <AppField
                            fieldName='Last Name'
                            titleColor='#344054'
                            containerStyle={{ marginBottom: hp('3.3312') }}
                            textInputHeight={hp('6.1072')}
                            titleStyle={{ fontSize: 14, marginBottom: hp('0.8328') }}
                            textInputStyle={{ paddingHorizontal: wp('3') }}
                            value={'Rhye'}
                        />

                        <AppField
                            fieldName='Email'
                            titleColor='#344054'
                            containerStyle={{ marginBottom: hp('3.3312') }}
                            textInputHeight={hp('6.1072')}
                            titleStyle={{ fontSize: 14, marginBottom: hp('0.8328') }}
                            textInputStyle={{ paddingHorizontal: wp('3') }}
                            value={'olivia@untitledui.com'}
                            leftIcon={'email-outline'}
                            iconColor="#667085"
                        />

                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' }}
                            style={{
                                width: wp('17.7728'),
                                height: wp('17.7728'),
                                marginBottom: hp('2.776')
                            }}
                            borderRadius={200}
                        />

                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingVertical: hp('2.2208'),
                                borderWidth: 1,
                                borderColor: colors.border,
                                borderRadius: 8,
                                paddingHorizontal: wp('6.6648'),
                            }}
                        >

                            <ImportSvg />

                            <View
                                style={{
                                    marginTop: hp('1.6656')
                                }}
                            >

                                <AppText
                                    style={{
                                        fontFamily: 'Lexend-Medium',
                                        fontSize: 14,
                                        lineHeight: 20,
                                        color: colors.primary,
                                        // textAlign:'center'
                                    }}
                                >
                                    Tap to upload
                                </AppText>

                                <AppText
                                    style={{
                                        fontSize: 14,
                                        lineHeight: 20,
                                        color: '#667085',
                                        // textAlign:'center'
                                    }}
                                    otherProps={{ numberOfLines: 3 }}
                                >
                                    {' SVG, PNG, JPG or GIF (max. 800x400px)'}
                                </AppText>

                            </View>

                        </View>

                        <View
                            style={{
                                backgroundColor: '#E4E7EC',
                                height: 1,
                                marginTop: hp('2.776'),
                                marginHorizontal: -wp('4.4432')
                            }}
                        />

                        <View
                            style={{
                                flexDirection: 'row',
                                alignSelf: 'flex-end',
                                marginTop: hp('2.2208')
                            }}
                        >

                            <AppButton
                                title='Cancel'
                                style={{
                                    marginRight: wp('4.4432'),
                                    backgroundColor: undefined,
                                    borderWidth: 1,
                                    borderColor: colors.border,
                                    height:hp('5.552'),
                                    borderRadius:8
                                }}

                                textStyle={{
                                    color: '#344054',
                                    fontFamily: 'Lexend-Medium',
                                    fontSize: 14,
                                    lineHeight: 20,
                                    paddingHorizontal: wp('4.4432')
                                }}
                            />

                            <AppButton
                                title='Save Changes'

                                style={{
                                    height:hp('5.552'),
                                    borderRadius:8,
                                }}

                                textStyle={{
                                    fontFamily: 'Lexend-Medium',
                                    fontSize: 14,
                                    lineHeight: 20,
                                    paddingHorizontal: wp('4.4432')
                                }}
                            />

                        </View>

                    </View>

                </View>

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: ScreenStyle.paddingHorizontal
    },
});

export default ProfileScreen;
