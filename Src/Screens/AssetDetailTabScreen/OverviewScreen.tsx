import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../../Components/Text/AppText';
import colors from '../../Config/colors';
import CheckSvg from '../../Assets/svgs/Survey/check.svg';
import QuestionCard from '../../Components/AssetDetailScreen/OverviewScreen/QuestionCard';
import Icon from 'react-native-vector-icons/Ionicons';
import MC_Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BlurView } from "@react-native-community/blur";
import SeparatorSvg from '../../Assets/svgs/Common/separator.svg';
import SectionCard from '../../Components/AssetDetailScreen/OverviewScreen/SectionCard';
import PartnerOverviewCard from '../../Components/AssetDetailScreen/OverviewScreen/PartnerOverviewCard';
import LearnMoreComp from '../../Components/AssetDetailScreen/OverviewScreen/LearnMoreComp';
import ManagerComp from '../../Components/AssetDetailScreen/OverviewScreen/ManagerComp';
import RecentResearch from '../../Components/AssetDetailScreen/OverviewScreen/RecentResearch';
import KeyDetails from '../../Components/AssetDetailScreen/OverviewScreen/KeyDetails';
import { Shadow } from 'react-native-shadow-2';

const OverviewScreen = () => {
    return (
        <View style={styles.container}>

            <View
                style={{
                    flexDirection: 'row',
                }}
            >

                <CheckSvg width={wp('4.4432')} height={wp('4.4432')} />

                <AppText
                    style={{
                        fontSize: 14,
                        lineHeight: 16,
                        color: colors.primary,
                        marginLeft: wp('1.6662')
                    }}
                >
                    Brave's Recommendation
                </AppText>

            </View>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 30,
                    marginTop: hp('1.6656'),
                    marginBottom: hp('2.776')
                }}
            >
                Kyle, this strategy may be a good fit for your portfolio.
            </AppText>

            <QuestionCard
                title='Why?'
                subTitle='Lower risk, predictable income'
            // onPress={}
            />

            <QuestionCard
                title='Why now?'
                subTitle='Higher yields & low default rates'
            // onPress={}
            />

            <QuestionCard
                title='How much?'
                subTitle='5% of your Brave Portfolio'
            // onPress={}
            />

            <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj4YgybiVG-iVk0KfG5-Boy-2cfn2cZ-dpw&usqp=CAU' }}
                style={{
                    width: '100%',
                    height: hp('23.8736'),
                    marginTop: hp('1.3886'),
                    justifyContent: 'flex-end',
                }}
                borderRadius={15}
            >

                {/* <BlurView
                    blurType="light"
                    blurAmount={4}
                    reducedTransparencyFallbackColor="black"
                > */}

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        paddingHorizontal: wp('4.1655'),
                        paddingVertical: hp('1.8044'),
                        justifyContent: 'space-between',
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}
                >

                    <View
                        style={{ width: wp('58') }}
                    >

                        <AppText
                            style={{
                                fontFamily: 'Lexend-SemiBold',
                                fontSize: 16,
                                lineHeight: 20,
                                color: '#FFFFFF'
                            }}
                            otherProps={{ numberOfLines: 1 }}
                        >
                            What is this strategy?
                        </AppText>

                        <AppText
                            style={{
                                color: '#FFFFFF',

                            }}
                            otherProps={{ numberOfLines: 1 }}
                        >
                            Automated Stocks 101
                        </AppText>

                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: wp('4.1655'),
                            paddingVertical: hp('1.5268'),
                            borderRadius: 19.5,
                            backgroundColor: 'rgba(255, 255, 255, 0.24)'
                        }}
                    >

                        <AppText
                            style={{
                                color: '#FFFFFF',
                                fontFamily: 'Lexend-SemiBold',
                                lineHeight: 15,
                                alignSelf: 'center'
                            }}
                        >
                            PLAY
                        </AppText>

                        <Icon
                            name='ios-play'
                            size={12}
                            color={'#FFFFFF'}
                            style={{ alignSelf: 'center' }}
                        />

                    </View>

                </View>

                {/* </BlurView> */}

            </ImageBackground>

            <SeparatorSvg
                style={{ alignSelf: 'center', marginTop: hp('4.858') }}
            />

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginTop: hp('3.0536')
                }}
            >
                What is Automated Stocks?
            </AppText>

            <AppText
                style={{
                    color: colors.fontLighBlack,
                    lineHeight: 22,
                    marginTop: hp('0.9716'),
                    marginBottom: hp('3.7476')
                }}
            >
                Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonummy euismod tincidunt dolore magna erat elit, aliquam volutpat.
            </AppText>

            <FlatList
                data={[{ title: 'Credit', subTitle: 'Asset Class' }, { title: '$811M', subTitle: 'Size as of January 31' }, { title: '+2.75% annl', subTitle: 'Historical Return' }, { title: 'Apr 2017', subTitle: 'Inception' }]}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                renderItem={({ item }) => {
                    return (
                        <SectionCard
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    );
                }}
            />

            <PartnerOverviewCard
                style={{
                    marginTop: hp('2.3596')
                }}
            />

            <LearnMoreComp
                style={{
                    marginTop: hp('3.8864')
                }}
            />

            <SeparatorSvg
                style={{
                    marginVertical: hp('4.1664'),
                    alignSelf: 'center'
                }}
            />

            <ManagerComp />

            <SeparatorSvg
                style={{
                    alignSelf: 'center',
                    marginVertical: hp('3.8864')
                }}
            />

            <RecentResearch />

            <SeparatorSvg
                style={{
                    alignSelf: 'center',
                    marginTop: hp('4.4416'),
                    marginBottom: hp('2.3596'),
                }}
            />

            <KeyDetails />

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginTop: hp('0.4164')
                }}
            >
                Withdrawals may be limited
            </AppText>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    marginTop: hp('1.1104'),
                    textAlign: 'justify'
                }}
            // otherProps={{numberOfLines:5}}
            >
                Diversified Credit fund processes withdrawals at the end of each quarter (every 3 Months).
            </AppText>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp('4.0252')
                }}
            >

                <AppText
                    style={{
                        fontSize: 14,
                        lineHeight: 17.5
                    }}
                >
                    Next Rquest deadline
                </AppText>

                <AppText
                    style={{
                        fontSize: 14,
                        lineHeight: 17.5,
                        color: colors.fontLighBlack
                    }}
                >
                    May 9, 2023
                </AppText>

            </View>

            <Shadow
                distance={20}
                startColor={colors.shadowDrop}
                style={{
                    width:'100%',
                }}
                containerStyle={{marginVertical:hp('3.8864')}}
            >

                <TouchableOpacity
                    style={{
                        paddingHorizontal: wp('3.8878'),
                        paddingVertical: hp('3.0536'),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderRadius: 12,
                        backgroundColor: colors.foreground,
                    }}
                >

                    <AppText
                        style={{
                            fontFamily:'Lexend-Medium',
                            fontSize:16,
                            lineHeight:20
                        }}
                    >
                    View Disclosures
                    </AppText>

                    <MC_Icon
                        name='chevron-right'
                        size={18}
                        color={colors.fontDark}
                        style={{
                            alignSelf:'center'
                        }}
                    />

                </TouchableOpacity>

            </Shadow>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default OverviewScreen;
