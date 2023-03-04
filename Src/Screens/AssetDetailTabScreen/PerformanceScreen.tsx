import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DistributionsComp from '../../Components/AssetDetailScreen/PerformanceScreen/DistributionsComp';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PerformanceScreen = () => {
    return (
        <View style={styles.container}>

            <DistributionsComp/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
});

export default PerformanceScreen;
