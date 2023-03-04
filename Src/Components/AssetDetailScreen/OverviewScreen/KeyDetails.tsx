import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../Config/colors';
import AppText from '../../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const KeyDetails = () => {
    return (
        <View style={styles.container}>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginBottom: hp('2.4984')
                }}
            >
                Key Details
            </AppText>



            <Comp
                KEY='Asset Class'
                value='Credit'
            />

            <Comp
                KEY='Inception Date'
                value='February 3,2023'
            />

            <Comp
                KEY='Annualized Historical Return'
                value='+2.75%'
            />

            <Comp
                KEY='Annualized Distribution Rate'
                value='+8.83%'
            />

            <Comp
                KEY='Strategy Expenses'
                value='View Summary'
                onPress={()=> console.log('LINK PRESSED')}
            />

            <Comp
                KEY='Withdrawals'
                value='Quartely'
            />

            <Comp
                KEY='Tax Reporting'
                value='1099-DIV'
            />

            <Comp
                KEY='Share Class'
                value='|'
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

const Comp = (props: {
    KEY?: string,
    value?: string,
    onPress?:()=>void,
}): JSX.Element => {

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: hp('3.3312')
            }}
        >

            <AppText
                style={{
                    fontSize: 14,
                    lineHeight: 17.5
                }}
            >
                {props.KEY}
            </AppText>

            <TouchableOpacity
                onPress={props.onPress}
                disabled={!props.onPress}
            >

                <AppText
                    style={{
                        fontFamily:props.onPress ? 'Lexend-Medium' : 'Lexend-Regular',
                        fontSize: 14,
                        lineHeight: 17.5,
                        color: props.onPress ? colors.primary : colors.fontLighBlack,
                        textDecorationLine:props.onPress ? 'underline' : undefined,
                        textDecorationColor: props.onPress ? colors.primary: undefined,
                    }}
                >
                    {props.value}
                </AppText>

            </TouchableOpacity>

        </View>
    );
}

export default KeyDetails;
