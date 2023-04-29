import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { ThunkDispatch } from '@reduxjs/toolkit';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import GoogleIcon from '../Assets/svgs/google.svg';
import AppButton from '../Components/Common/AppButton';
import FormField from '../Components/Form/FormField';
import FormikForm from '../Components/Form/FormikForm';
import SubmitButton from '../Components/Form/SubmitButton';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';
import { LoginUser } from '../Store/Auth/AsyscThunkOperations/LoginUser';
import { SignInWithGoogle } from '../Store/Auth/AsyscThunkOperations/SignInWithGoogle';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label('* Email'),
    password: Yup.string().required().max(99).label('* Password')
});

const LoginScreen = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const isLoading = useSelector((state: any) => state.AuthReducer.isLoading);
    const user = useSelector((state: any) => state.AuthReducer.user);

    const signInWithGoogle = async () => {

        try {
            GoogleSignin.configure();
            // await GoogleSignin.hasPlayServices();
             await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signIn();


            console.log('SSSSSSSSS ', userInfo)

            dispatch(SignInWithGoogle({
                email: userInfo.user.email,
                first_name: userInfo.user.givenName,
                last_name: userInfo.user.familyName,
                google_id: userInfo.user.id,
                image_url: userInfo.user.photo
            }));

        } catch (error: any) {

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }

    }

    return (
        <>
            <ScrollView>

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
                        onPress={() => signInWithGoogle()}
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
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            dispatch(LoginUser({ email: values.email, password: values.password }));
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
