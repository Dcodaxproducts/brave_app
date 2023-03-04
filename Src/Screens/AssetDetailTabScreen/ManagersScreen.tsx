import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ManagersComp from '../../Components/AssetDetailScreen/ManagersScreen/ManagersComp';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppText from '../../Components/Text/AppText';
import ManagersFAQs from '../../Components/AssetDetailScreen/ManagersScreen/ManagersFAQs';
import AppButton from '../../Components/Common/AppButton';

const ManagersScreen = () => {
    return (
        <View style={styles.container}>
            
        <ManagersComp/>

        <ManagersFAQs/>

        <AppButton
            title='Add to Portfolio'
            isSec
        />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ManagersScreen;
