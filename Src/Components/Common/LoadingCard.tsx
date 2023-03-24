import React from 'react';
import { View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';
import Lottie from 'lottie-react-native';

const LoadingCard = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <View
                style={{
                    width: wp('25'),
                    height: wp('25'),
                    borderRadius: 12,
                    backgroundColor: colors.foreground,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Lottie
                    source={require('../../Assets/animations/common/loading.json')}
                    autoPlay
                />

            </View>

        </View>
    );
}

export default LoadingCard;