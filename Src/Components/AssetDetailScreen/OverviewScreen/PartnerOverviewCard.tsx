import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import colors from '../../../Config/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../../Text/AppText';
import StarSvg from '../../../Assets/svgs/AssetDetail/Overview/star.svg';
import GrowSvg from '../../../Assets/svgs/AssetDetail/Overview/grow.svg';
import LockSvg from '../../../Assets/svgs/AssetDetail/Overview/lock.svg';

const PartnerOverviewCard = (props: {
    style?: ViewStyle
}) => {
    return (
        <Shadow
            distance={20}
            startColor={colors.shadowDrop}
            style={{ width: '100%' }}
            containerStyle={props.style}
        >

            <View
                style={styles.container}
            >

                <AppText
                    style={{
                        fontFamily: 'Lexend-Medium',
                        fontSize: 18,
                        lineHeight: 22.5
                    }}
                    otherProps={{ numberOfLines: 3 }}
                >
                    Investing in tomorrow, today.
                </AppText>

                <AppText
                    style={{
                        color: colors.fontLighBlack,
                        lineHeight: 22,
                        textAlign: 'justify',
                        marginTop: hp('1.6656')
                    }}
                    otherProps={{ numberOfLines: 8 }}
                >
                    We’ve partnered with Apollo, an iconic asset manager, to give you access to private market investments.
                </AppText>

                <Comp
                    title='30 Years Managing Investments'
                    SvgComp={<StarSvg width={wp('4.9986')} height={wp('4.9986')} />}
                    style={{ marginTop: hp('2.4984') }}
                />

                <Comp
                    title='30 Years Managing Investments'
                    SvgComp={<GrowSvg width={wp('4.9986')} height={wp('4.9986')} />}
                />

                <Comp
                    title='30 Years Managing Investments'
                    SvgComp={<LockSvg width={wp('4.9986')} height={wp('4.9986')} />}
                    style={{ marginBottom: 0 }}
                />

            </View>

        </Shadow>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.foreground,
        paddingVertical: hp('2.4984'),
        paddingHorizontal: wp('4.1655'),
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border
    },
});

const Comp = (props: {
    title?: string,
    SvgComp?: ReactNode,
    style?: ViewStyle,
}): JSX.Element => {
    return (
        <View
            style={[{
                flexDirection: 'row',
                marginBottom: hp('2.776')
            }, props.style]}
        >
            <View
                style={{alignSelf:'center'}}
            >
                {props.SvgComp}
            </View>

            <AppText
                style={{
                    fontSize: 14,
                    lineHeight: 17.5,
                    color: '#2A3346',
                    marginLeft: wp('2.777'),
                    textAlign:'justify'

                }}
                otherProps={{ numberOfLines: 2 }}
            >
                {props.title}
            </AppText>

        </View>
    );
}

export default PartnerOverviewCard;
