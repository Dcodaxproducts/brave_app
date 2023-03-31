import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';

const ScreenContainer = (props: {
    children: ReactNode,
    style?:ViewStyle
}) => {
    return (
        <View
            style={[{
                backgroundColor: ScreenStyle.backgroundColor,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                flex: ScreenStyle.flex,
                elevation: ScreenStyle.elevation

            }, props.style]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow:1}}
            >

                <View
                    style={{
                        paddingHorizontal: ScreenStyle.paddingHorizontal,
                        paddingVertical: ScreenStyle.paddingVertical,
                        flex:1,
                    }}
                >

                    {props.children}

                </View>

            </ScrollView>
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

export default ScreenContainer;
