import React, { useState } from 'react';
import { View } from 'react-native';
import AppField from '../../Components/Fields/AppField';
import AppText from '../../Components/Text/AppText';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppButton from '../../Components/Common/AppButton';
import OtpInput from '../../Components/Common/OtpInput';
const OTPTextInput = require('react-native-otp-textinput');
import Lottie from 'lottie-react-native';
import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../Components/Common/ScreenContainer';

const SecurityScreen = () => {

    const [isOtpSend, setIsOtpSend] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    const navigation:NavigationProp<ParamListBase>=useNavigation();

    return (
        <ScreenContainer
            style={{ justifyContent: 'center',}}
        >

            {!isOtpSend &&

                <>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-SemiBold',
                            fontSize: 22,
                            lineHeight: 27.5,
                            alignSelf: 'center'
                        }}
                    >
                        Verify Your Phone
                    </AppText>

                    <AppField
                        fieldName='Phone Number'
                        // containerStyle={{marginTop:hp('4.5804')}}
                        containerStyle={{ marginBottom: hp('3.3312'), marginTop: hp('4.5804') }}
                        textInputHeight={hp('7.634')}
                        titleStyle={{ fontSize: 14, marginBottom: hp('0.8328') }}
                        textInputStyle={{ paddingHorizontal: wp('3') }}
                        icon={'phone-in-talk-outline'}
                        value={'+1'}
                        otherProps={{
                            keyboardType: 'phone-pad'
                        }}
                    />

                    <AppButton
                        title='Verify'
                        isSec
                        style={{ height: hp('7.634') }}
                        onPress={() => setIsOtpSend(true)}
                    />

                </>

            }

            {isOtpSend && !isOtpVerified &&

                <>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-SemiBold',
                            fontSize: 22,
                            lineHeight: 27.5,
                            alignSelf: 'center',
                            textAlign: 'center'
                        }}
                    >
                        Enter the 6 Digit Code you Received via SMS
                    </AppText>

                    <OtpInput />

                    <AppButton
                        title='Verify'
                        isSec
                        style={{
                            marginTop: hp('4.5804')
                        }}
                        onPress={() => {
                            // setIsOtpSend(false)
                            setIsOtpVerified(true);
                        }}
                    />

                </>

            }

            {isOtpVerified &&

                <>

                    <Lottie
                        source={require('../../Assets/animations/common/CHECK.json')}
                        autoPlay
                        loop={false}
                        style={{
                            // backgroundColor:'red',
                            width:wp('75'),
                            alignSelf:'center'
                        }}
                        onAnimationFinish={()=> navigation.goBack()}
                    />

                    <AppText
                        style={{
                            alignSelf:'center',
                            fontFamily:'Lexend-Bold',
                            fontSize:30,
                            lineHeight:34,
                            marginTop:-hp('4')
                        }}
                    >
                        Verified
                    </AppText>

                </>

            }

        </ScreenContainer>
    );
}

export default SecurityScreen;