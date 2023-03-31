import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppButton from '../../Components/Common/AppButton';
import AppText from '../../Components/Text/AppText';
import colors from '../../Config/colors';
import Separator from '../../Assets/svgs/Home/separator.svg';
import VideoCard from '../../Components/HomeScreen/VideoCard';
import Stocks from '../../Assets/svgs/Home/stocks.svg';
import Bonds from '../../Assets/svgs/Home/bonds.svg';
import Crypto from '../../Assets/svgs/Home/crypto.svg';
import RealEstate from '../../Assets/svgs/Home/realEstate.svg';
import Credit from '../../Assets/svgs/Home/credit.svg';
import Venture from '../../Assets/svgs/Home/venture.svg';
import FAQsCard from '../../Components/Common/FAQsCard';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import ScreenContainer from '../../Components/Common/ScreenContainer';

const HomeScreen = (props: {
    // navigation: any
}) => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const user = useSelector((state: any) => state.AuthReducer.user);

    console.log('USERR ', user)

    return (

        <ScreenContainer>

            <AppText
                type='title'
            >
                {`Welcome, ${user?.first_name}`}
            </AppText>

            <AppText
                style={{
                    lineHeight: 22,
                    marginTop: hp('1.1104'),
                    color: colors.fontLighBlack,
                }}
            >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy euismod tincidunt dolore erat magna aliquam volutpat.
            </AppText>

            {user?.survey_complete == 'No' &&
                <AppButton
                    title='Survey'
                    style={{
                        marginTop: hp('4.0252%')
                    }}
                    isSec
                    onPress={() => navigation.navigate('surveyOverView')}
                />
            }

            <Separator
                height={1}
                width={wp('85.2539%')}
                style={{
                    marginTop: hp('3.6088%'),
                    marginBottom: hp('2.3596%'),
                    alignSelf: 'center'
                }}
            />

            <AppText
                type='title'
                style={{ marginBottom: hp('1.388') }}
            >
                Videos
            </AppText>

            <VideoCard />

            <AppText
                type='title'
                style={{
                    marginTop: hp('3.6088')
                }}
            >
                Assets
            </AppText>

            <AppText
                style={{
                    lineHeight: 22,
                    marginTop: hp('0.8328'),
                    color: colors.fontLighBlack,
                }}
            >
                We offer clients exclusive access to broad range of investments to achieve a diversified portfolio.
            </AppText>

            <View
                style={{
                    marginTop: hp('2.4984')
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: wp('2.7')
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('asset')}
                    >
                        <Stocks width={wp('43')} height={hp('17.6')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('asset')}
                    >
                        <Bonds width={wp('43')} height={hp('17.6')} />
                    </TouchableOpacity>

                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: wp('2.7')
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('asset')}
                    >
                        <Crypto width={wp('43')} height={hp('17.6')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('asset')}
                    >
                        <RealEstate width={wp('43')} height={hp('17.6')} />
                    </TouchableOpacity>

                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // marginBottom: hp('1.45')
                    }}
                >

                    <TouchableOpacity
                        onPress={() => navigation.navigate('asset')}
                    >
                        <Credit width={wp('43')} height={hp('17.6')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('asset')}
                    >
                        <Venture width={wp('43')} height={hp('17.6')} />
                    </TouchableOpacity>

                </View>

            </View>

            <Separator
                height={1}
                width={wp('85.2539%')}
                style={{
                    marginTop: hp('3.6088%'),
                    marginBottom: hp('2.3596%'),
                    alignSelf: 'center'
                }}
            />

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
                title='How do Phoenix fees work?'
                onPress={() => navigation.navigate('document')}
            />

            <FAQsCard
                title='How does Phoenix protect my portfolio from market downturn?'
                onPress={() => navigation.navigate('document')}
            />

            <FAQsCard
                title='What if I need to withdraw my money?'
                onPress={() => navigation.navigate('document')}
            />

            <FAQsCard
                title='What types of investing accounts does Phoenix offer?'
                onPress={() => navigation.navigate('document')}
            />

            <AppButton
                title='Chat Now'
                style={{
                    marginTop: hp('1.9432'),
                    marginBottom: hp('7'),
                }}
                isSec
            />

        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: colors.foreground,
        paddingTop: hp('4.858%'),
        paddingHorizontal: wp('5.554%'),
        elevation: 80,
    },
});

export default HomeScreen;
