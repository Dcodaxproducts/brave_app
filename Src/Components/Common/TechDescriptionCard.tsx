import React, { ReactNode } from 'react';
import { View, TouchableOpacity, Pressable,ScrollView } from 'react-native';
import AppText from '../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';

const TechDescriptionCard = (props: {
    SvgComp?: ReactNode,
    title?: string,
    subTitle?: string
}): JSX.Element => {
    return (

        <View
            style={{
                flexDirection: 'row',
                marginBottom: hp('2.4984')
            }}
        >

            {props.SvgComp}

            <View
                style={{
                    marginLeft: wp('4.1655'),
                }}
            >

                <AppText
                    style={{
                        fontFamily: 'Lexend-SemiBold',
                        fontSize: 16,
                        lineHeight: 20,
                    }}
                >
                    {props.title}
                </AppText>
                <AppText
                    style={{
                        lineHeight: 22,
                        color: colors.fontLighBlack,
                        textAlign: 'justify',
                        marginTop: hp('0.694'),
                        maxWidth:wp('78'),
                    }}
                >
                    {props.subTitle}
                </AppText>

            </View>

        </View>
    );
}

export default TechDescriptionCard;