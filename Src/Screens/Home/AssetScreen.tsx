import React from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../../Components/Text/AppText';
import PlaySvg from '../../Assets/svgs/Home/AssetScreen/play.svg';
import colors from '../../Config/colors';
import { Shadow } from 'react-native-shadow-2';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StrategySvg from '../../Assets/svgs/Home/AssetScreen/strategyIcon.svg';
import TechDescriptionCard from '../../Components/Common/TechDescriptionCard';
import ArrowSvg from '../../Assets/svgs/Home/AssetScreen/arrow.svg';
import KeySvg from '../../Assets/svgs/Home/AssetScreen/key.svg';
import BubblesSvg from '../../Assets/svgs/Home/AssetScreen/bubbles.svg';
import FAQsCard from '../../Components/Common/FAQsCard';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native'
import ScreenContainer from '../../Components/Common/ScreenContainer';

const AssetScreen = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    return (


        <ScreenContainer>

            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }}
                style={{
                    width: '100%',
                    height: hp('30.536'),
                    justifyContent: 'flex-end',
                    overflow: 'hidden'
                }}
                borderRadius={20}

            >

                <View
                    style={{
                        height: hp('7.7728'),
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        paddingRight: wp('4.30435')
                    }}
                >

                    <PlaySvg />

                </View>

            </ImageBackground>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    textAlign: 'justify',
                    marginTop: hp('2.776')
                }}
            >
                Venture capital is typically high risk, high reward, but offers investors the ability to get in at the ground floor of some od the world’s most promising startups. It can be an attractive investment as it provides access to innovative companies throughout their private and public lifecycles. {'\n'}{'\n'}
                Typically venture capital is not available to non accredited retail investors. On Brave, you can add venture to your portfolio and access innovative companies from a broad range of industries from artificial intelligence to DNA sequencing  to blockchain technology. With ARK, you can seek liquidity on a quarterly basis.
            </AppText>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginTop: hp('3.8864')
                }}
            >
                Explore Our Strategies
            </AppText>

            <Shadow
                distance={20}
                startColor={colors.shadowDrop}
                style={{
                    width: '100%',
                    // marginHorizontal:30
                }}
                containerStyle={{
                    marginTop: hp('1.388'),
                }}
            >

                <View
                    style={{
                        paddingHorizontal: wp('2.777'),
                        paddingVertical: hp('1.6656'),
                        borderRadius: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >

                    <View
                        style={{
                            width: wp('11.6634'),
                            height: wp('11.6634'),
                            borderRadius: 100,
                            backgroundColor: colors.background,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <StrategySvg />

                    </View>

                    <View
                        style={{
                            marginLeft: wp('2.777'),
                            flexGrow: 1,
                            maxWidth: wp('66.7')
                        }}
                    >

                        <AppText
                            style={{
                                fontFamily: 'Lexend-Medium',
                                fontSize: 16,
                                lineHeight: 20
                            }}
                        >
                            ARK Venture Fund
                        </AppText>

                        <AppText
                            style={{
                                lineHeight: 15,
                                color: '#7C7A7A',
                                marginTop: hp('1.1104'),
                            }}
                            otherProps={{ numberOfLines: 1, }}
                        >
                            Disruptive Innovation - ARK Invest
                        </AppText>

                    </View>

                    <Icon
                        name={'chevron-right'}
                        size={22}
                        color={colors.dark}
                    />

                </View>

            </Shadow>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginTop: hp('3.6088')
                }}
            >
                Why Ventures?
            </AppText>

            <View
                style={{
                    marginTop: hp('2.776')
                }}
            >

                <TechDescriptionCard
                    SvgComp={<ArrowSvg />}
                    title='Historically Higher Returns'
                    subTitle='The top quartile of venture capital funds have returned 15-27% over the last 10 years.'
                />

                <TechDescriptionCard
                    SvgComp={<KeySvg />}
                    title='Exclusive Access'
                    subTitle='You can get early access to participate in young, innovative companies as they grow and scale.'
                />

                <TechDescriptionCard
                    SvgComp={<BubblesSvg />}
                    title='Diversification'
                    subTitle='Venture capital sits on the higher end of the risk/return spectrum in an overall portfolio seeking long term growth; It can also provide exposure across industries and sectors.'
                />

            </View>

            <AppText
                type='title'
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
                title='Why invest in venture capital on Brave?'
                onPress={() => navigation.navigate('document')}
            />

            <FAQsCard
                title='What’s an example of a venture capital investment?'
                onPress={() => navigation.navigate('document')}
            />

        </ScreenContainer>


    );
}

export default AssetScreen;