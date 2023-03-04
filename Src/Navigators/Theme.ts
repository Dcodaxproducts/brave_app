import { DefaultTheme, } from '@react-navigation/native';
import colors from '../Config/colors';
export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.foreground,
        card: colors.foreground,
        text: colors.dark,
    },

}