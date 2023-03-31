import { getHeaderTitle } from "@react-navigation/elements";
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import colors from '../Config/colors';
import DocumentsScreen from "../Screens/AccountScreens/DocumentsScreen";
import FeesScreen from '../Screens/AccountScreens/FeesScreen';
import InvestAccountScreen from '../Screens/AccountScreens/InvestAccountScreen';
import InvestScreen from '../Screens/AccountScreens/InvestScreen';
import LearnScreen from "../Screens/AccountScreens/LearnScreen";
import ProfileScreen from '../Screens/AccountScreens/ProfileScreen';
import ReferralHistoryScreen from "../Screens/AccountScreens/RewardScreen/ReferralHistoryScreen";
import RewardsScreen from '../Screens/AccountScreens/RewardScreen/RewardsScreen';
import SecurityScreen from '../Screens/AccountScreens/SecurityScreen';
import SupportScreen from "../Screens/AccountScreens/SupportScreen";
import TransferScreen from '../Screens/AccountScreens/TransferScreen';
import AssetsDetailScreen from '../Screens/AssetDetailScreen';
import ForgotPaswordScreen from '../Screens/ForgotPaswordScreen';
import AssetScreen from '../Screens/Home/AssetScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SurveyOverViewScreen from '../Screens/SurveyOverViewScreen';
import SurveyScreen from '../Screens/SurveyScreen';
import BottomTab from './BottomTab';
import Header from './Header';

const Stack = createStackNavigator();

export default function StackNav() {

    const user = useSelector((state: any) => state.AuthReducer.user);

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: colors.foreground },
                header: (props) => {
                    const title: string = getHeaderTitle(props.options, props.route.name);
                    return (
                        <Header
                            title={title}
                            leftIcon={'chevron-left'}
                            leftIconOnpress={() => props.navigation.goBack()}
                        />
                    );
                }
            }}
        >

            {!user ? (

                <>

                    <Stack.Screen
                        name="login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name="signUp"
                        component={SignUpScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    <Stack.Screen
                        name='forgot'
                        component={ForgotPaswordScreen}
                        options={{
                            headerShown: false
                        }}
                    />

                </>
            )

                :

                (
                    <>

                        <Stack.Screen
                            name="loggedIn"
                            component={BottomTab}
                            options={{
                                headerShown: false
                            }}
                        />

                        <Stack.Screen
                            name="surveyOverView"
                            component={SurveyOverViewScreen}
                            options={{
                                header: (props) => {
                                    const title: string = getHeaderTitle(props.options, props.route.name);
                                    return (
                                        <Header
                                            title={'Survey'}
                                            leftIcon={'chevron-left'}
                                            leftIconOnpress={() => props.navigation.goBack()}
                                        />
                                    );
                                }
                            }}
                        />

                        <Stack.Screen
                            name="surveyScreen"
                            component={SurveyScreen}
                            options={{
                                header: (props) => {
                                    const title: string = getHeaderTitle(props.options, props.route.name);
                                    return (
                                        <Header
                                            title={'Survey'}
                                            leftIcon={'chevron-left'}
                                            leftIconOnpress={() => props.navigation.goBack()}
                                        />
                                    );
                                }
                            }}
                        />

                        <Stack.Screen
                            name="assetDetail"
                            component={AssetsDetailScreen}
                            options={{
                                header: (props) => {
                                    const title: string = getHeaderTitle(props.options, props.route.name);
                                    return (
                                        <Header
                                            title={'Assets'}
                                            leftIcon={'chevron-left'}
                                            leftIconOnpress={() => props.navigation.goBack()}
                                        />
                                    );
                                }
                            }}
                        />

                        <Stack.Screen
                            name='profile'
                            component={ProfileScreen}
                            options={{
                                title: 'Profile'
                            }}
                        />

                        <Stack.Screen
                            name='transfer'
                            component={TransferScreen}
                            options={{
                                title: 'Account Activity'
                            }}
                        />

                        <Stack.Screen
                            name='investAccount'
                            component={InvestAccountScreen}
                            options={{
                                title: 'Invest Account'
                            }}
                        />

                        <Stack.Screen
                            name='invest'
                            component={InvestScreen}
                            options={{
                                title: 'Invest'
                            }}
                        />

                        <Stack.Screen
                            name='documents'
                            component={DocumentsScreen}
                            options={{
                                title: 'Documents'
                            }}
                        />

                        <Stack.Screen
                            name='support'
                            component={SupportScreen}
                            options={{
                                title: 'Support'
                            }}
                        />

                        <Stack.Screen
                            name='learn'
                            component={LearnScreen}
                            options={{
                                title: 'Learn'
                            }}
                        />

                        <Stack.Screen
                            name='fees'
                            component={FeesScreen}
                            options={{
                                title: 'Fees'
                            }}
                        />

                        <Stack.Screen
                            name='security'
                            component={SecurityScreen}
                            options={{
                                title: 'Security'
                            }}
                        />

                        <Stack.Screen
                            name='rewards'
                            component={RewardsScreen}
                            options={{
                                title: 'Rewards'
                            }}
                        />

                        <Stack.Screen
                            name='rewardReferralHistroy'
                            component={ReferralHistoryScreen}
                            options={{
                                title: 'Rewards'
                            }}
                        />

                        <Stack.Screen
                            name='asset'
                            component={AssetScreen}
                            options={{
                                title: 'Venture Capital'
                            }}
                        />

                    </>
                )

            }

        </Stack.Navigator>
    );
}