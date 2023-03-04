import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TextInputProps } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import SearchIcon from '../../Assets/svgs/News/search.svg'

const SearchField = (props: {
    placeholder?: string,
    otherProps?: TextInputProps
}) => {

    const [textInputIsFocused, setTextInputIsFocused] = useState<boolean>(false);

    const textInputRef: any = useRef();

    return (
        <View
            style={{
                height: hp('7.0788'),
                borderRadius: 60,
                borderWidth: 1,
                borderColor:textInputIsFocused ? colors.primary : colors.border,
                backgroundColor: colors.background,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: wp('5.6785'),
            }}
        >

            <SearchIcon
                stroke={colors.dark}
                strokeWidth={1.5}
            />

            <TextInput
                style={{
                    marginLeft: wp('2.63'),
                    fontSize: 14,
                    lineHeight: 17.5,
                    fontFamily: 'Lexend-Regular',
                    flexGrow: 1
                }}
                ref={textInputRef}
                placeholderTextColor={colors.placeholder}
                placeholder={props.placeholder}
                selectionColor={colors.primary}
                onFocus={() => setTextInputIsFocused(true)}
                onBlur={() => {
                    setTextInputIsFocused(false)
                }}
                {...props.otherProps}
            />

        </View>
    );
};



export default SearchField;
