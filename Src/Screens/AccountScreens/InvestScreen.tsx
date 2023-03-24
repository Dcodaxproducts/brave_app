import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../../Components/Text/AppText';
import SelectionCard from '../../Components/Common/SelectionCard';
import DollorSvg from '../../Assets/svgs/Account/Transfer/dollor.svg';
import BankSvg from '../../Assets/svgs/Account/Transfer/bank.svg';
import colors from '../../Config/colors';
import AppButton from '../../Components/Common/AppButton';

const InvestScreen = () => {

    return (
        <View style={ScreenStyle}>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginBottom:hp('2.2208')
                }}
            >
                Invest Source
            </AppText>

            <SelectionCard
                title='Cash'
                svgComp={<DollorSvg />}
            />

            <SelectionCard
                title='Bank'
                svgComp={<BankSvg />}
            />

            <AppText
                style={{
                    fontFamily:'Lexend-SemiBold',
                    fontSize:18,
                    lineHeight:22.5,
                    marginTop:hp('3.3312'),
                }}
            >
                Investment
            </AppText>

            <AppText
                style={{
                    lineHeight:22,
                    color:colors.fontLighBlack,
                    marginTop:hp('1.1104')
                }}
            >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy euismod tincidunt dolore. 
            </AppText>

            <AppText
                style={{
                    alignSelf:'center',
                    marginVertical:hp('5')
                }}
            >
                GRAPH HERE
            </AppText>

            <AppButton
                title='Go to Bank'
                isSec
                style={{
                    position:'absolute',
                    bottom:ScreenStyle.paddingVertical
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default InvestScreen;
