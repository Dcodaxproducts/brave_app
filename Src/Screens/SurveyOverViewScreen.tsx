import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BigImage from '../Assets/svgs/SurveyOverView/BigImage.svg';
import AppButton from '../Components/Common/AppButton';
import ScreenContainer from '../Components/Common/ScreenContainer';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';

const SurveyOverViewScreen = (props: {
    navigation: NavigationProp<ParamListBase>
}) => {
    return (

        <ScreenContainer>

            <BigImage style={{alignSelf:'center'}} />

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
                onPress={() => props.navigation.navigate('surveyScreen')}
            />

            <AppButton
                title='Portfolio'
                isSec
                style={{
                    marginTop: hp('1.6656')
                }}
                onPress={() => {
                    props.navigation.navigate('Portfolio');
                }}
            />

        </ScreenContainer>

    );
};

const styles = StyleSheet.create({
    container: {},
});

export default SurveyOverViewScreen;
