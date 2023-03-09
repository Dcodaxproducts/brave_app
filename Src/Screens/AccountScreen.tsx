import React, { Component } from 'react';
import { View, Text, StyleSheet ,ScrollView} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SelectionCard from '../Components/Common/SelectionCard';
import colors from '../Config/colors';
import EmailSvg from '../Assets/svgs/Account/email.svg';
import ProfileSvg from '../Assets/svgs/Account/profile.svg';
import TransferSvg from '../Assets/svgs/Account/transfer.svg';
import DocumentSvg from '../Assets/svgs/Account/document.svg';
import FeesSvg from '../Assets/svgs/Account/fees.svg';
import SecuritySvg from '../Assets/svgs/Account/security.svg';
import RewardsSvg from '../Assets/svgs/Account/rewards.svg';
import LearnSvg from '../Assets/svgs/Account/learn.svg';
import SupportSvg from '../Assets/svgs/Account/support.svg';
import AppButton from '../Components/Common/AppButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';


const AccountScreen = () => {

    const navigation:NavigationProp<ParamListBase>=useNavigation();

    return (

        <ScrollView>

            <View style={styles.container}>

                <SelectionCard
                    title='Profile'
                    subTitle='kylehill47@gmail.com'
                    svgComp={<ProfileSvg width={wp('7')} height={wp('7')} />}
                    onPress={()=> navigation.navigate('profile')}
                />

                <SelectionCard
                    title='Transfers'
                    subTitle='Investment & Withdrawals'
                    svgComp={<TransferSvg width={wp('7')} height={wp('7')} />}
                    onPress={()=> navigation.navigate('transfer')}
                />

                <SelectionCard
                    title='Documents'
                    subTitle='Account, Tax & Confirmation'
                    svgComp={<DocumentSvg width={wp('7')} height={wp('7')} />}
                    onPress={()=> navigation.navigate('document')}
                />

                <SelectionCard
                    title='Fees'
                    subTitle='Your Titan Advisory Fee'
                    svgComp={<FeesSvg width={wp('7')} height={wp('7')} />}
                />

                <SelectionCard
                    title='Security'
                    subTitle='Login Prefer., Two-step Ver.'
                    svgComp={<SecuritySvg width={wp('7')} height={wp('7')} />}
                />

                <SelectionCard
                    title='Rewards'
                    subTitle='Refer, Gift Cards & Promo Code'
                    svgComp={<RewardsSvg width={wp('7')} height={wp('7')} />}
                />

                <SelectionCard
                    title='Learn'
                    subTitle='Onboarding & Education'
                    svgComp={<LearnSvg width={wp('7')} height={wp('7')} />}
                />

                <SelectionCard
                    title='Support'
                    subTitle='Help & FAQ'
                    svgComp={<SupportSvg width={wp('7')} height={wp('7')} />}
                />

                <AppButton
                    title='Log Out'
                    onPress={()=> navigation.navigate('login')}
                    isSec
                    style={{
                        marginBottom:hp('5.4132'),  
                        marginTop:hp('1.9432')
                    }}
                />

            </View>

        </ScrollView>
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

export default AccountScreen;
