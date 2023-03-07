import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppButton from '../Components/Common/AppButton';
import colors from '../Config/colors';
import GoogleIcon from '../Assets/svgs/google.svg';
import AppText from '../Components/Text/AppText';
import AppField from '../Components/Fields/AppField';
import { NavigationAction, NavigationProp, useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation: any=useNavigation();

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
                    marginHorizontal: wp('10%')
                }}
            >

                <AppButton
                    title='Login with Google'
                    textStyle={{
                        fontFamily: 'Lexend-Medium',
                        fontSize: 16,
                        color: colors.dark
                    }}
                    style={{
                        backgroundColor: undefined,
                        borderWidth: 1,
                        borderColor: colors.border
                    }}
                    iconComp={<GoogleIcon height={24} width={24} />}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        marginVertical: hp('3.5%')
                    }}
                >

                    <View
                        style={{
                            width: wp('18%'),
                            borderBottomWidth: 0.25,
                            height: 0,
                            borderBottomColor: colors.border,
                            alignSelf: 'center'
                        }}
                    />

                    <AppText
                        style={{
                            fontSize: 14,
                            marginHorizontal: wp('2%')
                        }}
                    >
                        or
                    </AppText>

                    <View
                        style={{
                            width: wp('18%'),
                            borderBottomWidth: 0.25,
                            height: 0,
                            borderBottomColor: colors.border,
                            alignSelf: 'center'
                        }}
                    />

                </View>

                <AppField
                    fieldName='Email'
                    placeholder='john.deo100@gmail.com'
                />

                <AppField
                    fieldName='Password'
                    placeholder='hellow'
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >

                    <AppText
                        style={{
                            fontSize: 15
                        }}
                    >
                        Remember me
                    </AppText>

                    <TouchableOpacity>
                        <AppText
                            style={{
                                fontSize: 15,
                                color: colors.primary,
                                textDecorationLine: 'underline'
                            }}
                        >
                            Forgot Password?
                        </AppText>
                    </TouchableOpacity>

                </View>

                <AppButton
                    title='Login In'
                    onPress={()=> navigation.navigate('bottomTab')}
                    style={{
                        marginTop: hp('5.4%')
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: hp('8.883')
                    }}
                >

                    <AppText
                        style={{
                            fontSize: 16,
                        }}
                    >
                        {`Don't have an account? `}
                    </AppText>


                    <TouchableOpacity
                        onPress={()=> navigation.navigate('signUp')} 
                    >
                        <AppText
                            style={{
                                fontSize: 16,
                                textDecorationLine: 'underline',
                                color: colors.primary
                            }}
                        >
                            Sign Up
                        </AppText>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.foreground,
    },
});

export default LoginScreen;
