import { NavigationProp, ParamListBase, } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AssetsCard from '../Components/AssetsScreen/AssetsCard';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';


const temp:any=[
   {uri :'https://www.ilgglobal.com/Uploads/IndividualsServices/bf8254b4798d4788899cdd158b7f1121_Real%20Estate%20selling.jpg', title:'Apollo Diversified Credit Fund'},
   {uri : 'https://sigmaproperties.com.pk/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-29-at-5.13.24-PM.jpeg',title:'Apollo Diversified Real Estate'},
    {uri :'https://crc.losrios.edu/crc/main/img/page-assets/programs-majors/realestate940x529.jpg',title:'Carlyle Tactical Private Credit'},
    {uri : 'https://www.zameen.com/blog/wp-content/uploads/2019/11/invest31-1024x640.jpg',title:'ARK Venture Fund'},
]

const AssetsScreen = (props:{
    navigation:NavigationProp<ParamListBase>
}) => {
    return (
        <View style={styles.container}>

            <AppText
                type='title'
            >
                Partners
            </AppText>

            <AppText
                style={{
                        lineHeight: 22,
                        marginTop: hp('0.8328'), // 6px
                        color: colors.fontLighBlack,              
                }}
            >
                Learn more about our industry leading partners and their investment  strategies.
            </AppText>

            <FlatList
                data={temp}
                keyExtractor={(item, index)=> index.toString()}
                numColumns={2}
                style={{
                    marginTop:hp('2.4984')
                }}
                columnWrapperStyle={{
                    justifyContent:'space-between'
                }}
                renderItem={({item})=>{
                    return(
                        <AssetsCard
                            uri={item.uri}
                            title={item.title}
                            onPress={()=> props.navigation.navigate('assetDetail', {title:item.title})}
                        />
                    );
                }}
            />

        </View>
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

export default AssetsScreen;
