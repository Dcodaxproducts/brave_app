import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { ThunkDispatch } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import LoadingCard from '../Components/Common/LoadingCard';
import FormField from '../Components/Form/FormField';
import FormikForm from '../Components/Form/FormikForm';
import SubmitButton from '../Components/Form/SubmitButton';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';
import ScreenStyle from '../Config/Styles/common/ScreenStyle';
import { SignupUser } from '../Store/UserRegistration/AsyncThunkOperations/SignupUser';
import { removeSignupError } from '../Store/UserRegistration/SignupSlice';

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(60).required().label("* Name"),
    email: Yup.string().email().required().label('* Email'),
    password: Yup.string().required().min(8).max(99)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ).
        label('* Password')
});

const SignUpScreen = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const isLoading = useSelector((state: any) => state.SignupReducer.isLoading);
    const signupError = useSelector((state: any) => state.SignupReducer.error);
    const user = useSelector((state: any) => state.SignupReducer.user);

    console.log('isLoading:', isLoading)
    console.log('error:', signupError)
    console.log('data: ', user)

    useEffect(() => {
        if (signupError) Toast.show({
            type: 'error',
            text1: signupError,
            onHide: () => dispatch(removeSignupError(true))
        })
    }, [signupError])

    useEffect(() => {
        if (user) navigation.navigate('loggedIn')
    }, [user])

    return (
        <>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: ScreenStyle.paddingVertical }}
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

                    <FormikForm
                        initialValues={{ name: '', email: '', password: '' }}
                        onSubmit={ (values) => {
                            console.log('values: ', values);

                            const fields = {
                                first_name: values.name.substring(0, values.name.indexOf(' ')),
                                last_name: values.name.substring(values.name.indexOf(' ') + 1),
                                email: values.email,
                                password: values.password,
                                c_password: values.password,
                            }

                            dispatch(SignupUser(fields))

                        }}
                        validationSchema={validationSchema}
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

                        <FormField
                            formikName='name'
                            fieldName='Name'
                            placeholder='e.g: Joe'
                            marginBottom={hp('3.053%')}
                            otherProps={{
                                autoCorrect: false,
                                autoComplete: 'name',
                                textContentType: 'givenName',
                                autoCapitalize: 'words'
                            }}
                        />

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
                            otherProps={{
                                secureTextEntry: true,
                                autoCapitalize: 'none',
                                autoCorrect: false,
                            }}
                            containerStyle={{
                                marginBottom: 0
                            }}
                        />

                        <SubmitButton
                            title='Sign Up'
                            // onPress={() => navigation.navigate('home')}
                            style={{
                                marginTop: hp('4.164%')
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

export default SignUpScreen;
