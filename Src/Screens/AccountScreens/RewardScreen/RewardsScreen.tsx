import React, { ReactNode } from 'react';
import { View, TouchableOpacity, Pressable,ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppButton from '../../../Components/Common/AppButton';
import AppText from '../../../Components/Text/AppText';
import colors from '../../../Config/colors';
import ScreenStyle from '../../../Config/Styles/common/ScreenStyle';
import SeparatorSvg from '../../../Assets/svgs/Common/separator.svg';
import CupSvg from '../../../Assets/svgs/Rewards/cup.svg';
import DollorSvg from '../../../Assets/svgs/Rewards/dollor.svg';
import StarsSvg from '../../../Assets/svgs/Rewards/stars.svg';
import TechDescriptionCard from '../../../Components/Common/TechDescriptionCard';

const RewardsScreen = () => {
    return (
        <ScrollView
            style={[ScreenStyle, { paddingVertical: hp('3') }]}
            contentContainerStyle={{paddingBottom:ScreenStyle.paddingVertical}}
            showsVerticalScrollIndicator={false}
        >

            <View
                style={{
                    padding: wp('6.9425'),
                    borderWidth: 1,
                    borderColor: colors.border,
                    backgroundColor: colors.background,
                    borderRadius: 16,
                    // justifyContent:'center'
                }}
            >

                <TouchableOpacity
                    style={{
                        paddingHorizontal: wp('5.554'),
                        paddingVertical: hp('1.388'),
                        borderRadius: 60,
                        backgroundColor: '#EDEEFF',
                        alignSelf: 'center'
                    }}
                >

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            lineHeight: 15,
                            color: colors.primary
                        }}
                    >
                        Cash Reward
                    </AppText>

                </TouchableOpacity>

                <AppText
                    style={{
                        fontFamily: 'Lexend-SemiBold',
                        fontSize: 20,
                        lineHeight: 25,
                        textAlign: 'center',
                        marginTop: hp('3.0536')
                    }}
                >
                    Get a cash reward when you refer friends
                </AppText>

                <AppText
                    style={{
                        textAlign: 'center',
                        marginTop: hp('1.6656'),
                        lineHeight: 22,
                        color: colors.fontLighBlack
                    }}
                >
                    <AppText>We’ll apply a cash reward of $50 for every friend you refer.</AppText>
                    <AppText style={{ fontFamily: 'Lexend-Medium', color: colors.primary }}> View Terms</AppText>
                </AppText>

                <AppButton
                    title='Share Referral Link'
                    isSec
                    style={{
                        marginTop: hp('4.164')
                    }}
                    textStyle={{
                        fontFamily: 'Lexend-Medium',
                        fontSize: 14,
                        lineHeight: 17.5
                    }}
                />

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp('4.858')
                }}
            >

                <AppText
                    style={{
                        fontFamily: 'Lexend-SemiBold',
                        fontSize: 18,
                        lineHeight: 22.5
                    }}
                >
                    Referral History
                </AppText>

                <AppText
                    style={{
                        fontFamily: 'Lexend-SemiBold',
                        fontSize: 16,
                        lineHeight: 22,
                        color: colors.primary,
                        textDecorationLine: 'underline'
                    }}
                >
                    View
                </AppText>

            </View>

            <SeparatorSvg style={{ alignSelf: 'center', marginTop: hp('2.4984') }} />

            <View
                style={{
                    marginTop:hp('1.5268')
                }}
            >

                <TechDescriptionCard
                    SvgComp={<CupSvg />}
                    title={'Get rewarded for each referral'}
                    subTitle={'Each time your friend signs up and makes a deposit, you’ll get a cash reward.'}
                />

                <TechDescriptionCard
                    SvgComp={<DollorSvg />}
                    title={'Earn $50 Cash'}
                    subTitle={'You’ll earn $50 Cash for each referral and can immediately start saving with 3.2% Cash APY.'}
                />

                <TechDescriptionCard
                    SvgComp={<StarsSvg />}
                    title={'You friend wins, too'}
                    subTitle={'When your friend signs up and invests, they’ll get 3 months off Brave Advisory fees.'}
                />

            </View>

        </ScrollView>
    );
}

export default RewardsScreen;