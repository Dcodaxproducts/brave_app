import { useFormikContext } from 'formik';
import React from 'react';
import { View, TextInputProps, ViewStyle, TextStyle } from 'react-native';
import AppField from '../Fields/AppField';
import ErrorMessage from './ErrorMessage';


interface FieldProps {
    formikName: string,
    placeholder?: string,
    fieldName: string,
    iconOnPress?: () => void,
    icon?: string,
    leftIcon?: string,
    iconColor?: string,
    width?: number,
    paddingVertical?: number,
    containerStyle?: ViewStyle,
    otherProps?: TextInputProps,
    titleStyle?: TextStyle,
    textInputStyle?: TextStyle,
    inputContainerStyle?: ViewStyle,
    textInputHeight?: number,
    value?: string,
    titleColor?: string,
    marginBottom?:number | undefined,
}

const FormField = (props: FieldProps) => {

    const {
        setFieldTouched,
        errors,
        touched,
        setFieldValue,
        values,
        handleSubmit,
    } = useFormikContext();

    return (

        <>

            <AppField
                {...props}
                otherProps={{
                    onChangeText: (text) => setFieldValue(props.formikName, text),
                    onBlur: () => setFieldTouched(props.formikName),
                    ...props.otherProps
                }}
                containerStyle={(touched[props.formikName] && errors[props.formikName]) ? {marginBottom:0 }: undefined}
            />

            <ErrorMessage error={errors[props.formikName]} visible={touched[props.formikName]} marginBottom={props.marginBottom}/>

        </>

    );
}

export default FormField;