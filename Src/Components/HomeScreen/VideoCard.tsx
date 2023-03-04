import React from 'react';
import { View, Text,  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../Config/colors';

const VideoCard = () => {
    return (
        <View
            style={{
                width:wp('35.5456'),
                height:hp('22.208'),
                borderRadius:12,
                backgroundColor:'lightgray'
            }}
        >

        </View>
    );
};

export default VideoCard;
