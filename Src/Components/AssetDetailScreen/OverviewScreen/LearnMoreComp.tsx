import React from 'react';
import { View, StyleSheet, ViewStyle, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../Config/colors';
import AppText from '../../Text/AppText';

const LearnMoreComp = (props: {
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
                    Learn More
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

            <FlatList
                data={[
                    { title: 'Credit 101', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxgTX9qQHH1-PJ_oAqrMT010I3GEHgBKcXjhEv0Ce2Mw-AvEnuCCGt2SGTiq7apMyNzQ&usqp=CAU' },
                    { title: 'Credit : Why and Why now?', uri: 'data:image/jpeg;base64,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' },
                    { title: 'Credit the Brave way', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0Tlp7xdT9NYPCNFQBTaH2ngLIe9KkyrpejOnjnBX7Y_o9YDpBChWOFf-QC1Yo0pEOhU&usqp=CAU' },
                ]}
                horizontal
                // columnWrapperStyle={{}}
                ItemSeparatorComponent={() => <View style={{ width: wp('3.3324') }} />}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <ImageBackground
                            source={{ uri: item.uri }}
                            style={{
                                width: wp('35.5456'),
                                height: hp('22.208'),
                                marginTop: hp('1.6656')
                            }}
                            borderRadius={12}
                        >

                            <View
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.25)',
                                    flex: 1,
                                    borderRadius: 12,
                                }}
                            >

                                <AppText
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Lexend-Medium',
                                        fontSize: 14,
                                        lineHeight: 18,
                                        position: 'absolute',
                                        bottom: 18,
                                        left: wp('3.3324'),
                                        right: wp('3.3324')
                                    }}
                                    otherProps={{ numberOfLines: 2 }}
                                >
                                    {item.title}
                                </AppText>

                            </View>

                        </ImageBackground>
                    );
                }}
            />



        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default LearnMoreComp;
