import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Config/colors';
import BigIcon from '../Assets/svgs/Portfolio/BigIcon.svg';
import AppText from '../Components/Text/AppText';
import ProgressCom from '../Components/PortfolioScreen/ProgressCom';
import AppButton from '../Components/Common/AppButton';

const PortfolioScreen = () => {
    return (

        <ScrollView>

            <View style={styles.container}>

                <View
                    style={{
                        width: '100%',
                        backgroundColor: '#FCFCFD',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: colors.border,
                    }}
                >

                    <BigIcon />

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Bold',
                            fontSize: 16,
                            lineHeight: 28,
                            textAlign: 'center'
                        }}
                    >
                        A Brave Portfolio, Made for You
                    </AppText>

                    <AppText
                        style={{
                            fontSize: 14,
                            textAlign: 'center',
                            lineHeight: 17.5,
                            color: colors.fontLighBlack,
                            marginTop: hp('1.2492')
                        }}
                    >
                        Diversify your Individual Account with an
                    </AppText>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-SemiBold',
                            fontSize: 16,
                            textAlign: 'center',
                            marginTop: hp('1.2492'),
                            color: colors.primary,
                            marginBottom: hp('2.776')
                        }}
                    >
                        Investment of $30K
                    </AppText>

                </View>

                <AppText
                    type='title'
                    style={{
                        fontSize: 18,
                        marginTop: hp('2.3596')
                    }}
                >
                    What's Inside
                </AppText>

                <AppText
                    style={{
                        lineHeight: 22,
                        color: colors.fontLighBlack,
                        marginTop: hp('1.388'),
                        marginBottom: hp('0.4164')
                    }}
                >
                    Invest across a diverse range of assets, tailored to your less than 5 year timeline and Aggressive pofile...
                </AppText>

                <ProgressCom
                    title='Stock'
                    percentage={50}
                    progressedColor={'#171D97'}
                    unProgressedColor={'rgba(95, 138, 255,0.1)'}
                />

                <ProgressCom
                    title='Bonds'
                    percentage={40}
                    progressedColor={'#FBCC56'}
                    unProgressedColor={'#F7F4ED'}
                />

                <ProgressCom
                    title='Real Estate'
                    percentage={30}
                    progressedColor={'#176BB4'}
                    unProgressedColor={'#EEF1F2'}
                />

                <ProgressCom
                    title='Private Credit'
                    percentage={20}
                    progressedColor={'#62C29D'}
                    unProgressedColor={'rgba(98, 194, 157, 0.13)'}
                />

                <ProgressCom
                    title='Venture'
                    percentage={10}
                    progressedColor={'#FCA3CD'}
                    unProgressedColor={'#FFF1F8'}
                />

                <ProgressCom
                    title='Personal Profits'
                    percentage={5}
                    progressedColor={'#9A4BFF'}
                    unProgressedColor={'#F7F0FF'}
                />

                <AppButton
                    title='Continue'
                    isSec
                    style={{
                        width: '100%',
                        marginTop: hp('5.6908')
                    }}
                />

                <AppText
                    style={{
                        alignSelf:'center',
                        lineHeight:20,
                        marginTop:hp('1.388'),
                        marginBottom:hp('5.1356'),
                        color:colors.fontLighBlack 
                    }}
                >
                    You can fine-tune our recommendation later.
                </AppText>

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

export default PortfolioScreen;
