import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppText from '../../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../Config/colors';
import HeartSvg from '../../../Assets/svgs/AssetDetail/Managers/heart.svg';
import SeparatorSvg from '../../../Assets/svgs/Common/separator.svg';
import TimeAgo from 'react-native-timeago';

const ManagersFAQs = () => {
    return (
        <View style={styles.container}>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginBottom: hp('4.7192')
                }}
            >
                FAQ’s
            </AppText>

            <Comp 
                question='Who is your partner Apollo Global Management?'
                responderImg='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
                responder='Jon Deo'
                responderDesignation='Investor Relations'
                answer='Learn more about our industry leading partners and their investment strategies.'
                likes={10}
                time={new Date(1677819072782)}

            />

            <View
                style={{
                    width:'100%',
                    height:1,
                    backgroundColor:'#F4F4F8',
                    marginVertical:hp('2.2208')
                }}
            />

            <Comp 
                question='Who is your partner Apollo Global Management?'
                responderImg='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
                responder='Jon Deo'
                responderDesignation='Investor Relations'
                answer='Learn more about our industry leading partners and their investment strategies.'
                likes={10}
                time={new Date(1677819072782)}

            />

            <View
                style={{
                    width:'100%',
                    height:1,
                    backgroundColor:'#F4F4F8',
                    marginVertical:hp('2.2208')
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

const Comp = (props: {
    question?: string,
    responder?: string,
    responderDesignation?: string,
    responderImg?: string,
    answer?: string,
    likes?: number,
    time?: any,
}): JSX.Element => {
    return (
        <>
            <AppText
                style={{
                    fontFamily: 'Lexend-Medium',
                    fontSize: 16,
                    lineHeight: 22,
                    
                }}
            >
                {props.question}
            </AppText>

            <View
                style={{
                    marginTop: hp('2.082'),
                    flexDirection: 'row',
                }}
            >

                <Image
                    source={{ uri: props.responderImg }}
                    style={{
                        width: wp('14.4404'),
                        height: wp('14.4404'),
                    }}
                    borderRadius={12}
                />

                <View
                    style={{
                        justifyContent: 'center',
                        marginLeft: wp('3.8878')
                    }}
                >

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 16,
                            lineHeight: 20.83
                        }}
                        otherProps={{ numberOfLines: 1 }}
                    >
                        {props.responder}
                    </AppText>

                    <AppText
                        style={{
                            lineHeight: 15.62,
                            color: colors.fontLighBlack,
                            marginTop: hp('0.5552')
                        }}
                        otherProps={{ numberOfLines: 1 }}
                    >
                        {props.responderDesignation}
                    </AppText>

                </View>

            </View>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    marginTop: hp('1.6656')
                }}
                otherProps={{ numberOfLines: 2 }}
            >
                {props.answer}
            </AppText>

            <View
                style={{
                    flexDirection: 'row',
                    marginTop: hp('2.4984'),
                    justifyContent: 'space-between'
                }}
            >

                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >

                    <View
                        style={{
                            width: wp('6.703678'),
                            height: wp('6.703678'),
                            borderRadius: 185,
                            backgroundColor: '#DCDCF3',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <HeartSvg />

                    </View>

                    <AppText
                        style={{
                            lineHeight: 15,
                            color: '#302E2C',
                            alignSelf: 'center',
                            marginLeft: wp('2.460422')
                        }}
                    >
                        {`${props.likes} Likes`}
                    </AppText>

                </View>

                <TimeAgo
                    time={props.time}
                    interval={60000}
                    style={{
                        lineHeight: 15,
                        color: '#898989',
                        alignSelf: 'center',
                        marginLeft: wp('2.460422'),
                        fontFamily: 'Lexend-Regular',
                        fontSize:12, 
                    }}
                />

            </View>
        </>
    );
}

export default ManagersFAQs;
