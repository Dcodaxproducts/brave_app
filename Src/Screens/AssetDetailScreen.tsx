import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';
import ScreenStyle from '../Config/Styles/common/ScreenStyle';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import TopTabComp from '../Components/AssetDetailScreen/TopTabComp';
import OverviewScreen from './AssetDetailTabScreen/OverviewScreen';
import PerformanceScreen from './AssetDetailTabScreen/PerformanceScreen';
import ManagersScreen from './AssetDetailTabScreen/ManagersScreen';
import HoldingsScreen from './AssetDetailTabScreen/HoldingsScreen';
import DisclosuresScreen from './AssetDetailTabScreen/DisclosuresScreen';
import ScreenContainer from '../Components/Common/ScreenContainer';


const AssetsDetailScreen = (props: {
    route: any
}) => {

    const [selected, setSelected] = useState<string>('Overview');

    const title = props.route.params.title;

    return (

        <ScreenContainer>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 22,
                    lineHeight: 27.5
                }}
            >
                {title}
            </AppText>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    marginTop: hp('0.9716')
                }}
            >
                Learn more about our industry leading partners and their investment strategies.
            </AppText>

            <TopTabComp
                onSelected={(item) => setSelected(item)}
            />

            {selected == 'Overview' && <OverviewScreen />}

            {selected == 'Performance' && <PerformanceScreen />}

            {selected == 'Managers' && <ManagersScreen />}

            {selected == 'Holdings' && <HoldingsScreen />}

            {selected == 'Disclosures' && <DisclosuresScreen />}

        </ScreenContainer>

    );
};

const styles = StyleSheet.create({
    container: {},
});

export default AssetsDetailScreen;
