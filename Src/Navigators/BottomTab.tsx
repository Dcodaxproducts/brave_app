import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import HomeScreen from '../Screens/Home/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from '../Assets/svgs/BottomTab/home.svg';
import AssetsIcon from '../Assets/svgs/BottomTab/assets.svg'
import PortfolioIcon from '../Assets/svgs/BottomTab/portfolio.svg';
import NewIcon from '../Assets/svgs/BottomTab/news.svg';
import AccountIcon from '../Assets/svgs/BottomTab/account.svg';
import colors from '../Config/colors';
import AssetsScreen from '../Screens/AssetsScreen';
import PortfolioScreen from '../Screens/PortfolioScreen';
import NewsScreen from '../Screens/NewsScreen';
import AccountScreen from '../Screens/AccountScreen';
import { getHeaderTitle } from "@react-navigation/elements";
import Header from './Header';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{

                tabBarStyle: {
                    height: hp('9.9936'),
                    borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    bottom: hp('2.082'),
                    fontFamily: 'Lexend-SemiBold'
                },
                tabBarShowLabel: true,
                // tabBarInactiveTintColor: colors.fontLight,
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <HomeIcon width={24} height={24} fill={focused ? colors.primary : colors.dark} />
                        )
                    },
                    header: (props) => {
                        const title: string = getHeaderTitle(props.options, props.route.name);
                        return (
                            <Header
                                title={'Brave'}
                                leftIcon={'menu'}
                                leftIconOnpress={() => console.log('Hellow')}
                                rightIcon={'progress-question'}
                                isTitleKurale
                            />
                        );
                    }
                }}
            />

            <Tab.Screen
                name="Assets"
                component={AssetsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <AssetsIcon width={24} height={24} strokeWidth={hp('0.2%')} stroke={focused ? colors.primary : colors.dark} />
                        )
                    },
                    header: (props) => {
                        const title: string = getHeaderTitle(props.options, props.route.name);
                        return (
                            <Header
                                title={'Assets'}
                            />
                        );
                    }
                }}
            />

            <Tab.Screen
                name="Portfolio"
                component={PortfolioScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <PortfolioIcon width={24} height={24} strokeWidth={hp('0.2%')} stroke={focused ? colors.primary : colors.dark} />
                        )
                    },
                    header: (props) => {
                        const title: string = getHeaderTitle(props.options, props.route.name);
                        return (
                            <Header
                                title={'Portfolio'}
                            />
                        );
                    }
                }}
            />

            <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <NewIcon width={24} height={24} strokeWidth={hp('0.2%')} stroke={focused ? colors.primary : colors.dark} />
                        )
                    },
                    header: (props) => {
                        const title: string = getHeaderTitle(props.options, props.route.name);
                        return (
                            <Header
                                title={'News'}
                            />
                        );
                    }
                }}
            />

            <Tab.Screen
                name="Accounts"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <AccountIcon width={24} height={24} strokeWidth={hp('0.2%')} stroke={focused ? colors.primary : colors.dark} />
                        )
                    },
                    header: (props) => {
                        const title: string = getHeaderTitle(props.options, props.route.name);
                        return (
                            <Header
                                title={'Account'}
                            />
                        );
                    }
                }}
            />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default BottomTab;
