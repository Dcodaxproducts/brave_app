import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SearchField from '../Components/Fields/SearchField';
import SliderBannerComp from '../Components/NewsScreen.tsx/SliderBannerComp';
import NewsSelectionTypeComp from '../Components/NewsScreen.tsx/NewsSelectionTypeComp';
import RecommendedCard from '../Components/NewsScreen.tsx/RecommendedCard';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';

const NewsScreen = () => {
    return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
        <View style={styles.container}>


                <SearchField
                    placeholder='Search News...'
                />

                <NewsSelectionTypeComp
                    items={['All', 'Business', 'Political', 'Sport']}
                />

                <SliderBannerComp />

                <AppText
                    type='title'
                    style={{
                        marginTop: hp('5.552')
                    }}
                >
                    Recommend
                </AppText>

                <RecommendedCard
                    data={[
                        {
                            type: 'Medicine',
                            title: 'Super doctors in total genetics',
                            description: 'Lorem ipsum dolor amet sed diam euismod tincidunt sit nonummy. ',
                            imageUri: 'https://img.freepik.com/premium-photo/alternative-medicine-herbal-organic-capsule-with-vitamin-e-omega-3-fish-oil-mineral-drug-with-herbs-leaf-natural-supplements-healthy-good-life_39768-4755.jpg?w=2000',
                        },
                        {
                            type: 'Business',
                            title: 'How Netflix brings safer & faster More...',
                            description: 'Lorem ipsum dolor amet sed diam euismod. ',
                            imageUri: 'https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg',
                        },
                        {
                            type: 'Open a Roth IRA',
                            title: 'Super Bowl spending',
                            description: 'Lorem ipsum dolor amet sed diam euismod tincidunt sit nonummy. ',
                            imageUri: 'https://s35691.pcdn.co/wp-content/uploads/2018/11/community.jpg',
                        },

                    ]}
                />


        </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: colors.foreground,
        paddingTop: hp('4.858%'),
        paddingHorizontal: wp('5.554%'),
        elevation: 80,
    },
});

export default NewsScreen;
