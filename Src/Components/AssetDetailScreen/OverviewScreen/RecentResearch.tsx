import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../../Text/AppText';
import colors from '../../../Config/colors';
import TimeAgo from 'react-native-timeago';
import SeparatorSvg from '../../../Assets/svgs/Common/separator.svg';

const RecentResearch = (props: {
    style?: ViewStyle
}) => {
    return (
        <View style={[styles.container, props.style]}>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >

                <AppText
                    style={{
                        fontFamily: 'Lexend-SemiBold',
                        fontSize: 20,
                        lineHeight: 25
                    }}
                >
                    Recent Research
                </AppText>

                <TouchableOpacity>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Bold',
                            fontSize: 14,
                            lineHeight: 17.5,
                            color: colors.primary,
                            textDecorationLine: 'underline',
                            textDecorationColor: colors.primary
                        }}
                    >
                        View All
                    </AppText>
                </TouchableOpacity>

            </View>

            <Comp/>

            <SeparatorSvg
                style={{
                    alignSelf:'center',
                    marginTop:hp('2.776')
                }}
            />

            <Comp/>

            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});


const Comp = (): JSX.Element => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: hp('2.776'),
                justifyContent: 'space-between'
            }}
        >

            <View
                style={{
                    width: wp('61'),
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >

                    <AppText
                        style={{
                            lineHeight: 15,
                            color: colors.primary,
                            maxWidth: wp('37.2118')
                        }}
                        otherProps={{ numberOfLines: 2 }}
                    >
                        Diversified Credit Fund
                    </AppText>

                    <View
                        style={{
                            height: hp('2.082'),
                            width: wp('0.2777'),
                            backgroundColor: '#C1BCBC',
                            marginHorizontal: wp('2.2216'),
                            alignSelf: 'center'
                        }}
                    />

                    <TimeAgo
                        time={new Date(1677819072782)}
                        interval={60000}
                        style={{
                            fontSize: 10,
                            lineHeight: 12.5,
                            alignSelf: 'center',
                            color: '#9A9AA0',
                        }}
                        numberOfLines={2}
                    />

                </View>

                <AppText
                    style={{
                        fontFamily: 'Lexend-SemiBold',
                        fontSize: 14,
                        lineHeight: 17.5,
                        marginTop: hp('0.9716'),

                    }}
                    otherProps={{ numberOfLines: 2, }}
                >
                    Apollo Diversified Credit Monthly Un
                </AppText>

                <AppText
                    style={{
                        fontSize: 10,
                        lineHeight: 12.5,
                        color: colors.fontLighBlack,
                        marginTop: hp('1.388'),
                        textAlign: 'justify'
                    }}
                    otherProps={{ numberOfLines: 5 }}
                >
                    Lorem ipsum dolor amet sed diam.
                </AppText>

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 12,
                    }}
                >

                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' }}
                        style={{
                            width: wp('9.1641'),
                            height: wp('9.1641'),
                        }}
                        borderRadius={wp('14.4404')}
                    />

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 12,
                            lineHeight: 15,
                            color: '#1F1F1F',
                            alignSelf: 'center',
                            marginLeft: wp('2.4993')
                        }}
                    >
                        Jon Deo
                    </AppText>

                </View>

            </View>

            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1560264418-c4445382edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' }}
                style={{
                    width: wp('26.3815'),
                    height: hp('13.88'),
                }}
                borderRadius={15}
            />

        </View>
    );
}

export default RecentResearch;
