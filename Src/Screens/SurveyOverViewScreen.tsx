import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenStyle from '../Config/Styles/common/ScreenStyle';
import BigImage from '../Assets/svgs/SurveyOverView/BigImage.svg';
import AppText from '../Components/Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Config/colors';
import AppButton from '../Components/Common/AppButton';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const SurveyOverViewScreen = (props:{
    navigation:NavigationProp<ParamListBase>
}) => {
    return (
        <View style={[ScreenStyle, { alignItems: 'center' }]}>

                <BigImage/>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 25,
                    lineHeight: 36,
                    textAlign: 'center',
                    marginTop: hp('4.803868'),
                }}
            >
                {`Let’s Create Your First Investment`}
            </AppText>

            <AppText
                style={{
                    lineHeight: 25,
                    textAlign: 'center',
                    marginTop: hp('0.8328'),
                    color: colors.fontLighBlack
                }}
            >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy euismod tincidunt dolore erat magna aliquam volutpat.
            </AppText>

            <AppButton
                title='Continue'
                isSec
                style={{
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: colors.dark,
                    marginTop: hp('11')
                }}
                textStyle={{
                    color: colors.dark
                }}
                onPress={()=> props.navigation.navigate('surveyScreen')}
            />

            <AppButton
                title='Portfolio'
                isSec
                style={{
                    marginTop: hp('1.6656')
                }}
                onPress={()=>{
                    props.navigation.navigate('Portfolio');
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default SurveyOverViewScreen;
