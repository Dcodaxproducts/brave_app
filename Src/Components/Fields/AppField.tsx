import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, ViewStyle, TextInputProps } from 'react-native';
import AppText from '../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextStyle } from 'react-native';
// import fontSize from '../Config/fontSize';
// import { useFormikContext } from 'formik';
// import ErrorMessage from './TextInputs/ErrorMessagee';

const AppField = (props: {
    placeholder?: string,
    fieldName?: string,
    iconOnPress?: () => void,
    icon?: string,
    leftIcon?: string,
    iconColor?:string,
    width?: number,
    paddingVertical?: number,
    containerStyle?: ViewStyle,
    otherProps?: TextInputProps,
    titleStyle?: TextStyle,
    textInputStyle?: TextStyle,
    inputContainerStyle?: ViewStyle,
    textInputHeight?: number,
    value?: string,
    titleColor?:string

}) => {

    const [textInputIsFocused, setTextInputIsFocused] = useState<boolean>(false);


    return (
        <View
            style={{
                marginBottom: hp('3.053%'),
                ...props.containerStyle
            }}
        >

            <AppText
                style={[{
                    color: textInputIsFocused ? colors.primary : props.titleColor ? props.titleColor : colors.placeholder,
                    fontSize: 15,
                    marginBottom: hp('1.1104%')
                }, props.titleStyle ? props.titleStyle : {}]}
            >
                {props.fieldName}
            </AppText>

            <View
                style={[{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 1,
                    borderColor: textInputIsFocused ? colors.primary : colors.border,
                    borderRadius: 12,
                    height: props.textInputHeight ? props.textInputHeight : hp('7.8%'),
                    paddingHorizontal: wp('4.9986'),
                }, props.textInputStyle]}
            >

                {props.leftIcon &&
                    <TouchableOpacity
                        onPress={props.iconOnPress}
                        style={{ justifyContent: 'center' }}
                    >

                        <Icon
                            name={props.leftIcon}
                            size={20}
                            color={props.iconColor}
                        />

                    </TouchableOpacity>
                }

                <TextInput
                    style={{
                        fontFamily: 'Lexend-Regular',
                        fontSize: 16,
                        flexGrow: 1,
                    }}
                    placeholderTextColor={colors.placeholder}
                    placeholder={props.placeholder}
                    selectionColor={colors.primary}
                    // ref={textInputRef}
                    // value={values[formikName]}
                    defaultValue={props.value}
                    // value={props.value}
                    onFocus={() => setTextInputIsFocused(true)}
                    onBlur={() => {
                        setTextInputIsFocused(false)
                        // setFieldTouched(formikName)
                    }}
                    {...props.otherProps}
                />

                {props.icon &&
                    <TouchableOpacity
                        onPress={props.iconOnPress}
                        style={{ justifyContent: 'center' }}
                    >

                        <Icon
                            name={props.icon}
                            size={20}
                            color={textInputIsFocused ? colors.primary : props.iconColor}
                        />

                    </TouchableOpacity>
                }

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default AppField;