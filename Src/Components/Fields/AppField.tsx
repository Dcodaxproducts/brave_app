import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import AppText from '../Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import fontSize from '../Config/fontSize';
// import { useFormikContext } from 'formik';
// import ErrorMessage from './TextInputs/ErrorMessagee';

const AppField = (props: {
    placeholder?: string,
    fieldName: string,
    iconOnPress?: () => void,
    icon?: string,
    width?: number,
    paddingVertical?: number,
    style?:ViewStyle,
    otherProps?: any,
}) => {

    const [textInputIsFocused, setTextInputIsFocused] = useState<boolean>(false);

    // const textInputRef = useRef();


    return (
        <View
            style={{
                marginBottom:hp('3.053%'),
                ...props.style
            }}
        >

            <AppText
                style={{
                    color: textInputIsFocused ? colors.primary : colors.placeholder,
                    fontSize: 15,
                    marginBottom:hp('1.1104%')
                }}
            >
                {props.fieldName}
            </AppText>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 1,
                    borderColor:textInputIsFocused ? colors.primary : colors.border,
                    borderRadius: 12,
                    height:hp('7.8%'),
                    paddingHorizontal:18,
                }}
            >

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
                        style={{justifyContent:'center'}}
                    >

                        <Icon
                            name={props.icon}
                            size={20}
                            color={colors.fontLight}
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