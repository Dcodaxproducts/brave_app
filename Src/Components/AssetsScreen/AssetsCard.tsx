import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../Text/AppText';

const WIDTH: number = wp('43.25');
const HEIGHT: number = hp('24.1512');

const AssetsCard = (props: {
    uri?: string,
    onPress?:()=> void,
    title?:string
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
        >

            <Image
                source={{ uri: props.uri }}
                style={{
                    width: WIDTH,
                    height: HEIGHT,
                    borderRadius: 15,
                }}
            />

            <AppText
                style={{
                    width: WIDTH,
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 14,
                    marginTop: hp('1.1104'),
                    marginBottom: hp('2.4984')
                }}
                otherProps={{
                    numberOfLines: 2
                }}
            >
                {props.title}
            </AppText>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});
export default AssetsCard;
