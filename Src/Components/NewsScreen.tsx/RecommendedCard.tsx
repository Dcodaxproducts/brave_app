import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import AppText from '../Text/AppText';

const RecommendComp=(props:{
    type?:string,
    title?:string,
    description?:string,
    imageUri?:string
}):JSX.Element=>{
    return(
        <TouchableOpacity
            style={styles.container}
        >

            <View
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >

                <Image
                    source={{ uri: props.imageUri }}
                    borderRadius={15}
                    style={{
                        width: wp('27'),
                        height: wp('27'),
                    }}
                />

                <View
                    style={{
                        marginLeft: wp('2'),
                        width: wp('54.5'),
                    }}
                >

                    <AppText
                        style={{
                            color: colors.primary,
                            lineHeight: 15,
                        }}
                        otherProps={{ numberOfLines: 1 }}
                    >
                        {props.type}
                    </AppText>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 13,
                            lineHeight: 17.7,
                            marginTop: hp('0.4164')
                        }}
                        otherProps={{ numberOfLines: 2 }}
                    >
                        {props.title}
                    </AppText>

                    <AppText
                        style={{
                            fontSize: 10,
                            lineHeight: 18,
                            marginTop: hp('0.694'),
                            textAlign: 'justify',
                            color: colors.fontLighBlack
                        }}
                        otherProps={{ numberOfLines: 2 }}
                    >
                        {props.description}
                    </AppText>

                </View>

            </View>



        </TouchableOpacity>
    );
}

interface obj{
    type?:string,
    title?:string,
    description?:string,
    imageUri?:string,
}

const RecommendedCard = (props: {
    data?: Array<obj>
}) => {
    return (
        
            <FlatList
            data={props.data}
            keyExtractor={(item, index)=> index.toString()}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{
                return(
                    <RecommendComp
                        imageUri={item.imageUri}
                        type={item.type}
                        title={item.title}
                        description={item.description}
                    />
                );
            }}
        /> 
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingHorizontal: wp('2.777'),
        paddingVertical: wp('2.777'),
        marginTop: hp('1.388'),
        borderRadius: 15,
    },
});

export default RecommendedCard;
