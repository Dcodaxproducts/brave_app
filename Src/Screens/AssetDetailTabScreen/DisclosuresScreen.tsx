import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppText from '../../Components/Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Shadow } from 'react-native-shadow-2';
import colors from '../../Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DisclosuresScreen = () => {
    return (
        <View style={styles.container}>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginBottom: hp('2.2208')
                }}
            >
                Disclosures
            </AppText>

            <Comp />
            <Comp />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

const Comp = (): JSX.Element => {
    return (
        <Shadow
            distance={20}
            startColor={colors.shadowDrop}
            style={{ width: '100%' }}
            containerStyle={{ marginBottom: hp('1.388') }}
        >

            <View
                style={{
                    paddingHorizontal: wp('3.8878'),
                    paddingVertical: hp('3.0536'),
                    borderRadius: 12,
                    backgroundColor: colors.foreground,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >

                <AppText
                    style={{
                        width: wp('72%'),
                        fontFamily: 'Lexend-Medium',
                        fontSize: 15,
                        lineHeight: 18.75,
                    }}
                    otherProps={{ numberOfLines: 1 }}
                >
                    Distribution and Repurchase Calendar
                </AppText>

                <Icon
                    name='chevron-right'
                    size={20}
                    color={colors.dark}
                    style={{ alignSelf: 'center' }}
                />

            </View>

        </Shadow>
    )
}

export default DisclosuresScreen;
