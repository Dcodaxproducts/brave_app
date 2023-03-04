import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../Config/colors';
import AppText from '../../Text/AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shadow } from 'react-native-shadow-2';

const QuestionCard = (props: {
    title?: string,
    subTitle?: string,
    onPress?: () => void
}) => {
    return (

        <Shadow
            distance={20}
            startColor={colors.shadowDrop}
            style={{
                width: '100%',
                marginBottom: hp('1.388'),
            }}
        >

            <TouchableOpacity
                style={styles.container}
                onPress={props.onPress}
            >

                <View>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 16,
                            lineHeight: 20,
                        }}
                    >
                        {props.title}
                    </AppText>

                    <AppText
                        style={{
                            lineHeight: 15,
                            color: colors.fontLighBlack,
                            marginTop: hp('1.1104')
                        }}
                    >
                        {props.subTitle}
                    </AppText>

                </View>

                <Icon
                    name='chevron-right'
                    size={24}
                    color={colors.dark}
                    style={{ alignSelf: 'center' }}
                />

            </TouchableOpacity>

        </Shadow>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp('1.5268'),
        paddingHorizontal: wp('3.8878'),

        borderRadius: 12,
        backgroundColor: colors.foreground
    },
});

export default QuestionCard;
