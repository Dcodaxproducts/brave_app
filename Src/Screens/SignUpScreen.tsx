import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../Config/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../Components/Text/AppText';
import AppField from '../Components/Fields/AppField';
import AppButton from '../Components/Common/AppButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

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

                <AppText
                    style={{
                        fontSize: 25,
                        fontFamily: 'Lexend-Bold',
                    }}
                >
                    Sign Up
                </AppText>

                <AppText
                    style={{
                        fontSize: 16,
                        color: colors.fontLighBlack,
                        marginTop: hp('1.66%'),
                        marginBottom: hp('3.8864%')
                    }}
                >
                    Welcome back!
                </AppText>

                <AppField
                    fieldName='Name'
                    placeholder='e.g: Joe' 
                />

                <AppField
                    fieldName='Email'
                    placeholder='john.deo100@gmail.com'
                />

                <AppField
                    fieldName='Password'
                    placeholder='hellow'
                    style={{
                        marginBottom:0
                    }}
                />

                <AppButton
                    title='Sign Up'
                    onPress={()=> navigation.navigate('home')}
                    style={{
                        marginTop: hp('4.164%')
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
                        onPress={() => navigation.navigate('login')}
                    >
                        <AppText
                            style={{
                                fontSize: 16,
                                textDecorationLine: 'underline',
                                color: colors.primary         
                            }}
                        >
                            Login
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

export default SignUpScreen;
