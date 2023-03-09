import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import colors from '../Config/colors';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import { getHeaderTitle } from "@react-navigation/elements";
import Header from './Header';
import BottomTab from './BottomTab';
import SurveyOverViewScreen from '../Screens/SurveyOverViewScreen';
import SurveyScreen from '../Screens/SurveyScreen';
import AssetsDetailScreen from '../Screens/AssetDetailScreen';
import ProfileScreen from '../Screens/AccountScreens/ProfileScreen';
import TransferScreen from '../Screens/AccountScreens/TransferScreen';
import DocumentScreen from '../Screens/AccountScreens/DocumentScreen';
import ForgotPaswordScreen from '../Screens/ForgotPaswordScreen';

const Stack = createStackNavigator();

export default function StackNav() {

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
                   headerShown:false
                }}
            />

            <Stack.Screen
                name="bottomTab"
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
                    title: 'Invest'
                }}
            />

            <Stack.Screen
                name='document'
                component={DocumentScreen}
                options={{
                    title: 'Invest Account'
                }}
            />


        </Stack.Navigator>
    );
}