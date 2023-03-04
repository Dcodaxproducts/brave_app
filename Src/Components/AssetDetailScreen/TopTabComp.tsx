import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../Text/AppText';
import colors from '../../Config/colors';

const TopTabComp = (props:{
    onSelected?:(item:string)=> void,
}) => {

    const [selected, setSelected] = useState<string>('Overview');

    return (
        <View
            style={{
                flexDirection: 'row',
            }}
        >

            <FlatList
                data={['Overview', 'Performance', 'Managers', 'Holdings', 'Disclosures']}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() =>{ 
                                setSelected(item);
                                if(props.onSelected) props.onSelected(item)
                            }}
                            style={{
                                marginTop: hp('4.164'),
                            }}
                        >
                            <AppText
                                style={{
                                    fontSize: 16,
                                    lineHeight: 20,
                                    color: item == selected ? colors.primary : colors.fontLighBlack,
                                    fontFamily: item == selected ? 'Lexend-Bold' : 'Lexend-Regular',
                                    marginRight: wp('3.6088')
                                }}
                            >
                                {item}
                            </AppText>

                            <View
                                style={{
                                    width: '100%',
                                    height: hp('0.4164'),
                                    backgroundColor: '#D4DEEC',
                                    marginTop: hp('1.6656'),
                                    marginBottom:hp('4.0252')
                                }}
                            >

                                <View
                                    style={{
                                        width:wp('6.6648'),
                                        height: hp('0.4164'),
                                        backgroundColor:item==selected ? colors.primary : undefined,
                                        borderRadius:78,
                                    }}
                                />

                            </View>

                        </Pressable>
                    );
                }}
            />

        </View>
    );
};


export default TopTabComp;
