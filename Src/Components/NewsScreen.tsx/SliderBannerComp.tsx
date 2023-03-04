import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image';
import colors from '../../Config/colors';
import AppText from '../Text/AppText';

const images = [
    'https://img.freepik.com/premium-photo/alternative-medicine-herbal-organic-capsule-with-vitamin-e-omega-3-fish-oil-mineral-drug-with-herbs-leaf-natural-supplements-healthy-good-life_39768-4755.jpg?w=2000',
    'https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg',
    'https://s35691.pcdn.co/wp-content/uploads/2018/11/community.jpg',
    'https://assets.entrepreneur.com/content/3x2/2000/20191127190639-shutterstock-431848417-crop.jpeg',
]

const SliderBannerComp = () => {

    return (
        <View style={styles.container}>

            <SliderBox
                ImageComponent={FastImage}
                images={images}
                parentWidth={wp('89')}
                sliderBoxHeight={hp('27.76')}
                onCurrentImagePressed={(index: number) => console.warn(`image ${index} pressed`)}
                dotColor={colors.dark}
                inactiveDotColor="#C6C8C8"
                ImageLoader={false}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                ImageComponentStyle={{ borderRadius: 22, }}
                imageLoadingColor="#2196F3"
                currentImageEmitter={(index: string) => console.log('>>>>>>> ', index)}
                dotStyle={{
                    width: wp('2.2216'),
                    height: wp('2.2216'),
                    borderRadius: wp('2.2216') / 2,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                }}
                paginationBoxStyle={{
                    position: 'absolute',
                    padding: 0,
                    bottom: -hp('5'),
                    width: 0,
                }}
            >
                <View
                    style={{
                        flex:1,
                        backgroundColor:'rgba(0,0,0,0.25)'
                    }}
                >

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            marginVertical: wp('4.9986'),
                            marginHorizontal: wp('4.9986'),
                        }}
                    >

                        <AppText
                            style={{
                                fontFamily: 'Lexend-SemiBold',
                                fontSize: 16,
                                lineHeight: 20,
                                color: colors.foreground,
                            }}
                            otherProps={{ numberOfLines: 1 }}
                        >
                            How Netflix brings safer & faster
                        </AppText>

                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >

                            <AppText
                                style={{
                                    lineHeight: 14,
                                    color: colors.foreground,
                                    marginTop: hp('0.9716'),
                                }}
                                otherProps={{ numberOfLines: 1 }}
                            >
                                May 02, 2023
                            </AppText>

                            <View
                                style={{
                                    height: hp('1.388'),
                                    borderWidth: 1,
                                    borderColor: 'rgba(255,255,255,0.33)',
                                    alignSelf: 'center',
                                    marginHorizontal: wp('2.4993'),
                                    marginTop: hp('1')
                                }}
                            />

                            <AppText
                                style={{
                                    lineHeight: 14,
                                    color: colors.foreground,
                                    marginTop: hp('0.9716'),

                                }}
                                otherProps={{ numberOfLines: 1 }}
                            >
                                5:30 Pm
                            </AppText>

                        </View>

                    </View>

                </View>

            </SliderBox>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default SliderBannerComp;
