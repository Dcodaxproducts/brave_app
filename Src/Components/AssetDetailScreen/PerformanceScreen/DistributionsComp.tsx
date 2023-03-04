import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../Config/colors';
import AppText from '../../Text/AppText';
import CycleSvg from '../../../Assets/svgs/AssetDetail/Performance/cycle.svg';
import AppButton from '../../Common/AppButton';

const DistributionsComp = () => {
    return (
        <View style={styles.container}>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5
                }}
            >
                Distributions
            </AppText>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    marginTop: hp('0.9716'),
                    width: wp('80.533'),
                    marginBottom: hp('2.6372')
                }}
            >
                Diversified Credit Fund’s Annualized Distribution Rate is 8.83%
            </AppText>

            <Comp
                title='Q1’23'
                subTitle='Reinvestment'
                value='Expected Mar. 31'
                isExpected
            />

            <Comp
                title='Q1’23'
                subTitle='Reinvestment'
                value='+8.83%'
            />

            <Comp
                title='Q1’23'
                subTitle='Reinvestment'
                value='+7.89%'
            />

            <Comp
                title='Q1’23'
                subTitle='Reinvestment'
                value='+6.85%'
            />

            <AppButton
                title='Add to Portfolio'
                isSec
                style={{
                    marginTop:hp('3.7476')
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

const Comp = (props: {
    title?: string,
    subTitle?: string,
    value?: string,
    isExpected?: boolean
}): JSX.Element => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: hp('3.0536')
            }}
        >

            <View
                style={{
                    flexDirection: 'row',
                    width: '60%',
                }}
            >

                <View
                    style={{
                        width: wp('13.885'),
                        height: wp('13.885'),
                        borderWidth: 1,
                        borderColor: colors.border,
                        borderRadius: 500,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.background
                    }}
                >

                    <CycleSvg />

                </View>

                <View
                    style={{
                        marginLeft: wp('4.1655'),
                        justifyContent: 'center'
                    }}
                >

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 16,
                            lineHeight: 20,
                        }}
                        otherProps={{ numberOfLines: 2 }}
                    >
                        {props.title}
                    </AppText>

                    <AppText
                        style={{
                            fontSize: 14,
                            lineHeight: 17.5,
                            color: colors.fontLighBlack,
                            marginTop: hp('0.694')
                        }}
                        otherProps={{ numberOfLines: 2 }}
                    >
                        {props.subTitle}
                    </AppText>

                </View>

            </View>

            {props.isExpected ?

                <AppText
                    style={{
                        alignSelf: 'center',
                        fontSize: 14,
                        lineHeight: 17.5,
                        color: colors.primary
                    }}
                >
                    {props.value}
                </AppText>

                :

                <AppText
                    style={{
                        alignSelf: 'center',
                        fontFamily: 'Lexend-Medium',
                        fontSize: 16,
                        lineHeight: 20,
                        color: colors.fontLighBlack
                    }}
                >
                    {props.value}
                </AppText>

            }


        </View>
    );
}

export default DistributionsComp;
