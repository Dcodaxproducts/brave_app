import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../colors';

export default{
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: colors.foreground,
    paddingVertical: hp('4.858%'),
    paddingHorizontal: wp('5.554%'),
    elevation: 80,
}