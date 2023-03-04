import React, { Component, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AppText from '../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';

const NewsSelectionTypeComp = (props: {
    items: string[],
}) => {

    const [selected, setSelected]=useState<string>('All'); 

    return (
        <View
            style={{
                flexDirection: 'row',
            }}
        >

            <FlatList
                data={props.items}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={()=> setSelected(item)}
                            style={{
                                paddingVertical:hp('1.388'),
                                paddingHorizontal:wp('5.554'),
                                backgroundColor:item==selected ? colors.dark : colors.background,
                                borderRadius:60,
                                marginTop:hp('2.4984'),
                                marginBottom:wp('7.4979'),
                                marginRight:wp('2.2216')
                            }}
                        >
                            <AppText
                                style={{
                                    fontSize: 14,
                                    lineHeight: 17.5,
                                    color:item==selected ? colors.foreground : colors.fontLighBlack 
                                }}
                            >
                                {item}
                            </AppText>

                        </TouchableOpacity>
                    );
                }}
            />

        </View>
    );
};

export default NewsSelectionTypeComp;
