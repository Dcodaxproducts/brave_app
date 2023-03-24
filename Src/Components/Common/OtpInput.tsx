import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import AppText from '../Text/AppText';
import CountDownTimer from 'react-native-countdown-timer-hooks';

export default function OtpInput(props: {
    code?: (code:string) => void,
    onConfirmError?: string,
    phoneNo?: string,
}) {
    const [isTimeOut, setIsTimeOut] = useState(false);
    return (
        <View style={styles.container}>



            {/* <AppText>{`OTP has been send to ${props.phoneNo}`}</AppText> */}

            <OTPTextInput
                inputCount={6}
                tintColor={colors.primary}
                handleTextChange={(res: string) => {
                    if (res.length == 6) {
                        if (props.code) props.code(res);
                    }
                }}
                containerStyle={{
                    marginTop:hp('5.4132')
                }}
                offTintColor={colors.border}
                textInputStyle={{
                    borderRadius: 12,
                    borderWidth: 1,
                    borderBottomWidth:1,
                    width: wp('13.3296'),
                    height: wp('13.3296'),
                    fontFamily:'Lexend-SemiBold',
                    fontSize:18,
                    color: colors.dark,
                    marginHorizontal:0,
                    
                }}
            />

            {/* {props.onConfirmError &&
                <AppText style={{ color: 'red', }}>
                    {`Oops... ${props.onConfirmError}. Please try again`}
                </AppText>
            }

            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >

                <View
                    style={{ flexDirection: 'row' }}
                >
                    {!isTimeOut &&
                        <>
                            <AppText
                                style={{ alignSelf: 'center' }}
                            >
                                {`Resend Code in `}
                            </AppText>

                            <CountDownTimer
                                // ref={refTimer}
                                timestamp={90}
                                timerCallback={() => setIsTimeOut(true)}
                                textStyle={{
                                    color: 'red',
                                }}
                            />

                        </>
                    }

                    {isTimeOut &&
                        <TouchableOpacity
                            onPress={() => {
                                setIsTimeOut(false);
                            }}
                        >
                            <AppText
                                style={{ alignSelf: 'center', color: colors.primary }}
                            >
                                Resend Code
                            </AppText>
                        </TouchableOpacity>
                    }

                </View>

                <TouchableOpacity
                // onPress={() => closedModel(true)}
                >
                    <AppText
                        style={{ alignSelf: 'center', color: colors.primary }}
                    >
                        Change Number?
                    </AppText>
                </TouchableOpacity>

            </View> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});