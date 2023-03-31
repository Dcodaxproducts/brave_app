import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CheckSvg from '../../Assets/svgs/Survey/check.svg';
import UncheckSvg from '../../Assets/svgs/Survey/unCheck.svg';
import colors from '../../Config/colors';
import AppText from '../Text/AppText';

const OptionComp = (props: {
    title: string,
    checkTitle?: string,
    onSelect: (title: string) => void
}) => {

    return (

        <TouchableOpacity
            onPress={() => {
                props.onSelect(props.title);
            }}
            style={styles.container}
        >

            <AppText
                style={{
                    fontSize: 14,
                    lineHeight: 17.5,
                    flexWrap: 'wrap'
                }}
                otherProps={{ numberOfLines: 2 }}
            >
                {props.title}
            </AppText>

            {props.checkTitle == props.title ?

                <CheckSvg />
                :
                <UncheckSvg />
                
            }

        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: hp('2.2208'),
        paddingHorizontal: wp('3.8878'),
        backgroundColor: colors.foreground,
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: hp('1.388'),
        justifyContent: 'space-between',
        // columnGap:10
    },
});

export default OptionComp;
