import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';
import DollorSvg from '../../Assets/svgs/Account/Document/dollor.svg';
import SelectionCard from '../../Components/Common/SelectionCard';
import colors from '../../Config/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../../Components/Text/AppText';
import { ViewStyle } from 'react-native';
import SeparatorSvg from '../../Assets/svgs/Common/separator.svg'
import AppButton from '../../Components/Common/AppButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../Components/Common/ScreenContainer';

const InvestAccountScreen = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    return (
        <ScreenContainer>

            <SelectionCard
                title='$ 50000.45'
                subTitle='Total Amount'
                svgComp={<DollorSvg />}
                disableShadow
                marginBottom={0}
                containerSyle={{
                    backgroundColor: colors.background,
                    paddingVertical: hp('2.2208'),
                    paddingHorizontal: wp('3.8878')
                }}
                iconContainerStyle={{
                    backgroundColor: colors.dark
                }}
                titleStyle={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 20,
                    lineHeight: 25
                }}
            />

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginTop: hp('3.6088')
                }}
            >
                Invest Account Type
            </AppText>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    marginTop: hp('1.1104')
                }}
            >
                To Invest in Phoenix Strategies, first pick the  account, then the amount
            </AppText>

            <Comp
                property='Individual'
                value={'$2000.40'}

            />

            <SeparatorSvg
                style={{ alignSelf: 'center' }}
            />

            <Comp
                property='TRAD.IRA'
                value={'$3000.05'}

            />

            <SeparatorSvg
                style={{ alignSelf: 'center' }}
            />

            <Comp
                property='ROTH IRA'
                value={'Open a Roth IRA'}
                isNonAmount
            />

            <AppButton
                title='Go to Invest Source'
                isSec
                onPress={() => navigation.navigate('invest')}
                style={{
                    position: 'absolute',
                    bottom:ScreenStyle.paddingVertical
                }}
            />

        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default InvestAccountScreen;


const Comp = (props: {
    property?: string,
    value?: string,
    style?: ViewStyle,
    isNonAmount?: boolean
}): JSX.Element => {
    return (
        <View
            style={[{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: hp('3.0536')
            }, props.style]}
        >

            <AppText
                style={{
                    fontFamily: 'Lexend-Medium',
                    fontSize: 16,
                    lineHeight: 20
                }}
            >
                {props.property}
            </AppText>

            <AppText
                style={{
                    fontSize: 14,
                    lineHeight: 17.5,
                    color: props.isNonAmount ? '#939395' : colors.primary
                }}
            >
                {props.value}
            </AppText>

        </View>
    );
}
