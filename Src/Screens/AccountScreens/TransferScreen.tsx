import React from 'react';
import { ScrollView, SectionList, View } from 'react-native';
import AppText from '../../Components/Text/AppText';
import colors from '../../Config/colors';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ArrowSvg from '../../Assets/svgs/Account/Transfer/arrow.svg';
import SeparatorSvg from '../../Assets/svgs/Common/separator.svg';
import AppButton from '../../Components/Common/AppButton';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const data = [
    {
        title: 'February 2023',
        data: [
            {
                time: 'Feb 15, 2023, 1:08 PM',
                amount: '$2,595.95'
            }
        ]
    },
    {
        title: 'December 2022',
        data: [
            {
                time: 'Dec 30, 2022, 10:54AM',
                amount: '$4,806.95'
            }
        ]
    },
    {
        title: 'November 2022',
        data: [
            {
                time: 'Nov 15, 2023, 1:08 PM',
                amount: '$2,595.95'
            },
            {
                time: 'Nov 12, 2022, 10:10 AM',
                amount: '$987.00'
            }
        ]
    },
    {
        title: 'December 2022',
        data: [
            {
                time: 'Dec 15, 2023, 1:08 PM',
                amount: '$2,595.95'
            },
            {
                time: 'Dec 12, 2022, 10:10 AM',
                amount: '$987.00'
            }
        ]
    },

]

const TransferScreen = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    return (
        <View
            style={ScreenStyle}
        >

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 20,
                    lineHeight: 25,
                }}
            >
                Transfers history
            </AppText>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    marginTop: hp('0.9716')
                }}
            >
                Log in to your account at okcoin.com to view your trading activity
            </AppText>

            <SectionList
                sections={data}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <SeparatorSvg style={{ alignSelf: 'center', marginTop: hp('2.776') }} />}
                renderSectionFooter={() => <View style={{ height: hp('4.164') }} />}
                style={{ marginTop: hp('2.776'), marginBottom:hp('7') }}
                renderSectionHeader={({ section: { title } }) => <SectionHeader title={title} />}
                renderItem={({ item }) => <ItemComp time={item.time} amount={item.amount} />}
            />

            <AppButton
                title='New Transfer'
                isSec
                onPress={() => navigation.navigate('investAccount')}
                style={{
                    position: 'absolute',
                    bottom: ScreenStyle.paddingVertical
                }}
            />

        </View>
    );
}

export default TransferScreen;


const SectionHeader = (props: {
    title?: string
}): JSX.Element => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >

            <ArrowSvg />

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 18,
                    lineHeight: 22.5,
                    marginLeft: wp('2.821432')
                }}
            >
                {props.title}
            </AppText>

        </View>
    );
}

const ItemComp = (props: {
    time?: string,
    amount?: string,
}): JSX.Element => {
    return (
        <View>

            <AppText
                style={{
                    marginTop: hp('2.776'),
                    lineHeight: 15,
                    color: colors.fontLighBlack
                }}
            >
                {props.time}
            </AppText>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp('1.388'),
                    alignItems: 'center'
                }}
            >

                <AppText
                    style={{
                        fontFamily: 'Lexend-Medium',
                        fontSize: 14,
                        lineHeight: 17.5
                    }}
                >
                    USD Withdrawal
                </AppText>

                <AppText
                    style={{
                        fontSize: 14,
                        lineHeight: 17.5
                    }}
                >
                    {props.amount}
                </AppText>

            </View>

        </View>
    );
}