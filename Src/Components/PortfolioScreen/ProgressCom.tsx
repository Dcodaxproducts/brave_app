import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../Text/AppText';

const ProgressCom = (props:{
    title:string,
    percentage:number,
    progressedColor:string,
    unProgressedColor:string,
}) => {
    return (
        <View style={styles.container}>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 16,
                    lineHeight: 20
                }}
            >
                {props.title}
            </AppText>

            <View
                style={{
                    height: hp('4.164'),
                    backgroundColor: props.unProgressedColor,
                    borderRadius: 4,
                    marginTop: hp('1.388')
                }}
            >

                <View
                    style={{
                        width: `${props.percentage}%`,
                        height: '100%',
                        backgroundColor: props.progressedColor,
                        borderTopLeftRadius:4,
                        borderBottomLeftRadius:4,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                    <AppText
                        style={{
                            color: 'white',
                            lineHeight: 15,
                            fontFamily: 'Lexend-SemiBold',
                            fontSize:10
                        }}
                    >
                        {`${props.percentage}%`}
                    </AppText>

                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: hp('2.2208')
    },
});

export default ProgressCom;
