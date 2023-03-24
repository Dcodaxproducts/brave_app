import React from 'react';
import { View } from 'react-native';
import AppText from '../../Components/Text/AppText';
import colors from '../../Config/colors';
import ScreenStyle from '../../Config/Styles/common/ScreenStyle';

// import { Container } from './styles';

const FeesScreen = () => {
    return (
        <View
            style={ScreenStyle}
        >

            <AppText
                style={{
                    lineHeight:22,
                    color:colors.fontLighBlack,
                    textAlign:'justify'
                }}
            >
                Venture capital is typically high risk, high reward, but offers investors the ability to get in at the ground floor of some od the world’s most promising startups. It can be an attractive investment as it provides access to innovative companies throughout their private and public lifecycles.{'\n'}{'\n'}
                Typically venture capital is not available to non accredited retail investors. On Brave, you can add venture to your portfolio and access innovative companies from a broad range of industries from artificial intelligence to DNA sequencing  to blockchain technology. With ARK, you can seek liquidity on a quarterly basis.
            </AppText>

        </View>
    );
}
export default FeesScreen;