import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Shadow } from 'react-native-shadow-2';
import { useSelector } from 'react-redux';
import BackgroundSvg from '../../Assets/svgs/Account/Profile/background.svg';
import ImportSvg from '../../Assets/svgs/Account/Profile/import.svg';
import AppButton from '../../Components/Common/AppButton';
import AppField from '../../Components/Fields/AppField';
import AppText from '../../Components/Text/AppText';
import colors from '../../Config/colors';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';

const ProfileScreen = () => {

    const user = useSelector((state: any) => state.AuthReducer.user);

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
                        source={user.image ? { uri: user.image } : require('../../Assets/images/avator.png')}
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
                    {user.first_name +' '+ user.last_name}
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
                    {user.email}
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
                            value={user.first_name}
                        />

                        <AppField
                            fieldName='Last Name'
                            titleColor='#344054'
                            containerStyle={{ marginBottom: hp('3.3312') }}
                            textInputHeight={hp('6.1072')}
                            titleStyle={{ fontSize: 14, marginBottom: hp('0.8328') }}
                            textInputStyle={{ paddingHorizontal: wp('3') }}
                            value={user.last_name}
                        />

                        <AppField
                            fieldName='Email'
                            titleColor='#344054'
                            containerStyle={{ marginBottom: hp('3.3312') }}
                            textInputHeight={hp('6.1072')}
                            titleStyle={{ fontSize: 14, marginBottom: hp('0.8328') }}
                            textInputStyle={{ paddingHorizontal: wp('3') }}
                            value={user.email}
                            leftIcon={'email-outline'}
                            iconColor="#667085"
                        />

                        <Image
                            source={user.image ? { uri: user.image } : require('../../Assets/images/avator.png')}
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
