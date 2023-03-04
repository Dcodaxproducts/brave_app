import React, { Component, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import AppText from '../Text/AppText';
import { Shadow } from 'react-native-shadow-2';
import CheckSvg from '../../Assets/svgs/Survey/check.svg';
import UncheckSvg from '../../Assets/svgs/Survey/unCheck.svg';

const OptionComp = (props: {
    title: string,
    checkTitle?:string,
    onSelect:(title:string)=> void
}) => {

    // const [selected, setSelected]=useState<string>('');

    return (

        // <Shadow
        //     distance={20}
        //     startColor={colors.shadowDrop}
        //     // endColor={colors.foreground}
        //     // offset={[5, 20]}
        //     style={{
        //         width: '100%',
        //         // marginBottom: hp('1.388')
        //     }}
        // >

        <TouchableOpacity
            onPress={()=> props.onSelect(props.title)}
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

        // </Shadow>

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
