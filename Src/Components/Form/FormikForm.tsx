import { Formik } from 'formik';
import React, { ReactNode } from 'react';
import { View } from 'react-native';

export default function FormikForm(props: {
    initialValues:Object,
    onSubmit:(values:any)=> void,
    validationSchema?:Object,
    children:ReactNode
}) {
    return (
            <Formik

                initialValues={props.initialValues}
                onSubmit={props.onSubmit}
                validationSchema={props.validationSchema}
            >
                {() => (<>{props.children}</>)}
            </Formik>
    );
}