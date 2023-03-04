import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../Config/colors';
import AppText from '../../Text/AppText';
import ManagersCard from '../../Common/ManagersCard';
import SeparatorSvg from '../../../Assets/svgs/Common/separator.svg';

const ManagersComp = () => {
    return (
        <View style={styles.container}>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5
                }}
            >
                Meet the Managers
            </AppText>

            <AppText
                style={{
                    lineHeight: 22.5,
                    color: colors.fontLighBlack,
                    marginTop: hp('1.1104')
                }}
            >
                Learn more about our industry leading partners and their investment strategies.
            </AppText>

            <FlatList
                data={[
                    { title: 'Harmonaize', uri: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' },
                    { title: 'Fred Vunjabei', uri: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' },
                    { title: 'Jon Deo', uri: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' },
                ]}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                style={{ marginTop: hp('1.6656') }}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: wp('3.3324') }} />}
                renderItem={({ item }) => {
                    return (
                        <ManagersCard
                            title={item.title}
                            uri={item.uri} 
                        />
                    );
                }}
            />

            <SeparatorSvg
                style={{
                    alignSelf:'center',
                    marginVertical:hp('4.0252')
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ManagersComp;
