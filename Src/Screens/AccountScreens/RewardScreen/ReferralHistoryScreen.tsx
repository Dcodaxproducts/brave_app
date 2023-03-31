import React from 'react';
import { ScrollView, View } from 'react-native';
import ScreenContainer from '../../../Components/Common/ScreenContainer';
import AppText from '../../../Components/Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../Config/colors';
import AppButton from '../../../Components/Common/AppButton';
import FAQsCard from '../../../Components/Common/FAQsCard';

const ReferralHistoryScreen = () => {
  return (

    <ScreenContainer>

      <AppText
        style={{
          fontFamily: 'Lexend-SemiBold',
          fontSize: 20,
          lineHeight: 25,
        }}
      >
        Referral History
      </AppText>

      <AppText
        style={{
          fontFamily: 'Lexend-SemiBold',
          fontSize: 16,
          lineHeight: 22,
          marginTop: hp('2.9148')
        }}
      >
        Pending(0)
      </AppText>

      <AppText
        style={{
          lineHeight: 22,
          color: colors.fontLighBlack,
          marginTop: hp('1.388')
        }}
      >
        Your pending referrals will appear here when an invited friend creates their account.
      </AppText>

      <AppText
        style={{
          fontFamily: 'Lexend-SemiBold',
          fontSize: 16,
          lineHeight: 22,
          marginTop: hp('2.9148')
        }}
      >
        Redeemed(0)
      </AppText>

      <AppText
        style={{
          lineHeight: 22,
          color: colors.fontLighBlack,
          marginTop: hp('1.388')
        }}
      >
        Once your referrals sign up and invest, you can find their names here.
      </AppText>

      <AppButton
        title='Share Link'
        isSec
        style={{
          marginTop: hp('5.1356'),
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.dark,
        }}
        textStyle={{
          color: colors.dark
        }}
      />

      <AppText
        type='title'
        style={{
          marginTop: hp('3.7476')
        }}
      >
        FAQ
      </AppText>

      <AppText
        style={{
          lineHeight: 22,
          marginTop: hp('1.1104'),
          color: colors.fontLighBlack,
          marginBottom: hp('1.6656'),
        }}
      >
        {`We’re here to answer any questions.`}
      </AppText>

      <FAQsCard
        title='What if I’m missing a referral?'
      />

      <FAQsCard
        title='Terms and conditions'
      />

    </ScreenContainer>

  );
}

export default ReferralHistoryScreen;