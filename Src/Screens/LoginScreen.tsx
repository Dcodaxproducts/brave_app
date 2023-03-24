import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppButton from '../Components/Common/AppButton';
import colors from '../Config/colors';
import GoogleIcon from '../Assets/svgs/google.svg';
import AppText from '../Components/Text/AppText';
import AppField from '../Components/Fields/AppField';
import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';
import FormikForm from '../Components/Form/FormikForm';
import FormField from '../Components/Form/FormField';
import SubmitButton from '../Components/Form/SubmitButton';
import * as Yup from 'yup';
import ScreenStyle from '../Config/Styles/common/ScreenStyle';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { LoginUser } from '../Store/UserLogin/AsyncThunkOperations/LoginUser';
import LoadingCard from '../Components/Common/LoadingCard';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label('* Email'),
    password: Yup.string().required().min(8).max(99)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ).
        label('* Password')
});

const LoginScreen = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const isLoading = useSelector((state: any) => state.LoginReducer.isLoading);
    const signupError = useSelector((state: any) => state.LoginReducer.error);
    const user = useSelector((state: any) => state.LoginReducer.user);

    useEffect(()=>{
        if(user) navigation.navigate('loggedIn')
    },[user])

    return (
        <>
        <ScrollView 
        style={styles.container}
        contentContainerStyle={{paddingBottom:ScreenStyle.paddingVertical}}
        >

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

                <FormikForm
                    initialValues={{email:'', password:''}}
                    onSubmit={(values)=> {
                        dispatch(LoginUser({email:values.email, password:values.password}));
                    }}
                    validationSchema={validationSchema}
                >

                    <FormField
                        formikName='email'
                        fieldName='Email'
                        placeholder='e.g: john.deo100@gmail.com'
                        marginBottom={hp('3.053%')}
                            otherProps={{
                                keyboardType: 'email-address',
                                autoComplete: 'email',
                                textContentType: 'emailAddress',
                                autoCorrect: false,
                                autoCapitalize: 'none'
                            }}
                    />

                    <FormField
                        formikName='password'
                        fieldName='Password'
                        placeholder='Passsword'
                        marginBottom={hp('3.053%')}
                            otherProps={{
                                secureTextEntry: true,
                                autoCapitalize: 'none',
                                autoCorrect: false,
                            }}
                            containerStyle={{
                                marginBottom: 0
                            }}
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

                        <TouchableOpacity
                            onPress={() => navigation.navigate('forgot')}
                        >
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

                    <SubmitButton
                        title='Login In'
                        style={{
                            marginTop: hp('5.4%')
                        }}
                    />

                </FormikForm>

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
                        onPress={() => navigation.navigate('signUp')}
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

        </ScrollView>

        <Modal
                visible={isLoading}
                animationType={'fade'}
                transparent
            >

                <LoadingCard/>

            </Modal>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.foreground,
    },
});

export default LoginScreen;
