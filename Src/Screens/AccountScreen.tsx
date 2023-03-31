import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import DocumentSvg from '../Assets/svgs/Account/document.svg';
import FeesSvg from '../Assets/svgs/Account/fees.svg';
import LearnSvg from '../Assets/svgs/Account/learn.svg';
import ProfileSvg from '../Assets/svgs/Account/profile.svg';
import RewardsSvg from '../Assets/svgs/Account/rewards.svg';
import SecuritySvg from '../Assets/svgs/Account/security.svg';
import SupportSvg from '../Assets/svgs/Account/support.svg';
import TransferSvg from '../Assets/svgs/Account/transfer.svg';
import AppButton from '../Components/Common/AppButton';
import ScreenContainer from '../Components/Common/ScreenContainer';
import SelectionCard from '../Components/Common/SelectionCard';
import { LogoutUser } from '../Store/Auth/AsyscThunkOperations/LogoutUser';


const AccountScreen = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const dispatch = useDispatch<any>();
    const user = useSelector((state: any) => state?.AuthReducer?.user);

    return (

        <ScreenContainer>

                <SelectionCard
                    title='Profile'
                    subTitle={user?.email}
                    svgComp={<ProfileSvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('profile')}
                />

                <SelectionCard
                    title='Transfers'
                    subTitle='Investment & Withdrawals'
                    svgComp={<TransferSvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('transfer')}
                />

                <SelectionCard
                    title='Documents'
                    subTitle='Account, Tax & Confirmation'
                    svgComp={<DocumentSvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('documents')}
                />

                <SelectionCard
                    title='Fees'
                    subTitle='Your Titan Advisory Fee'
                    svgComp={<FeesSvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('fees')}
                />

                <SelectionCard
                    title='Security'
                    subTitle='Login Prefer., Two-step Ver.'
                    svgComp={<SecuritySvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('security')}
                />

                <SelectionCard
                    title='Rewards'
                    subTitle='Refer, Gift Cards & Promo Code'
                    svgComp={<RewardsSvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('rewards')}
                />

                <SelectionCard
                    title='Learn'
                    subTitle='Onboarding & Education'
                    svgComp={<LearnSvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('learn')}
                />

                <SelectionCard
                    title='Support'
                    subTitle='Help & FAQ'
                    svgComp={<SupportSvg width={wp('7')} height={wp('7')} />}
                    onPress={() => navigation.navigate('support')}
                />

                <AppButton
                    title='Log Out'
                    onPress={() => {
                        dispatch(LogoutUser())
                    }}
                    isSec
                    style={{
                        marginBottom: hp('5.4132'),
                        marginTop: hp('1.9432')
                    }}
                />

            </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default AccountScreen;
