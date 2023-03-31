import React from 'react';
import ScreenContainer from './ScreenContainer';
import AppText from '../Text/AppText';
import colors from '../../Config/colors';

const DocomentComp = (props:{
    string:string
}) => {
    return (
        <ScreenContainer>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    textAlign: 'justify'
                }}
            >
                {props.string}
            </AppText>

            </ScreenContainer>
    );
}

export default DocomentComp;