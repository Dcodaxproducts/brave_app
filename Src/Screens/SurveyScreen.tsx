import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import ScreenStyle from '../Config/Styles/common/ScreenStyle';
import * as Progress from 'react-native-progress';
import AppText from '../Components/Text/AppText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../Config/colors';
import OptionComp from '../Components/SurveyScreen/OptionComp';
import AppButton from '../Components/Common/AppButton';
import { Shadow } from 'react-native-shadow-2';

const question = [
    {
        title: 'What is the primary goal you hope to achieve?',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        otptions: [
            'Grow long-term wealth',
            'Save for retirement',
            'Support my loved ones',
            'Buy a home',
            'Pay off debt',
            'Start my own business',
        ]
    },
    {
        title: 'When do you hope to reach you goa?',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        otptions: [
            '1-5 Years',
            '5-10 Years',
            '10-20 Years',
            '20+ Years',
        ]
    },
    {
        title: 'How Much do you Know About Investing?',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
        otptions: [
            'I’m New to Investing',
            'I Know the Besices',
            'I Have a Good Understanding',
            'I’m an Expert',
        ]
    },

]

interface questionObj {
    title: string;
    description: string;
    otptions: string[];
}

const SurveyScreen = () => {

    const [length, setLength] = useState<number>(0);
    const [current, setCurrent] = useState<questionObj>();
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (question) {
            setLength(question.length);
            setCurrent(question[currentIndex]);
        }
    }, [question])

    return (
        <View style={ScreenStyle}>

            <Progress.Bar
                progress={(currentIndex + 1) / length}
                width={wp('100') - (ScreenStyle.paddingHorizontal * 2)}
                height={hp('1.388')}
                borderRadius={80}
                color={colors.primary}
                borderColor={'transparent'}
                unfilledColor={'rgba(71, 72, 200,0.1)'}
            />

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: hp('1.5268')
                }}
            >

                <AppText
                    style={{
                        fontFamily: 'Lexend-Medium',
                        fontSize: 14,
                        lineHeight: 17.5
                    }}
                >
                    Investor Profile
                </AppText>

                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 14,
                            lineHeight: 17.5
                        }}
                    >
                        {currentIndex + 1}
                    </AppText>

                    <AppText
                        style={{
                            fontFamily: 'Lexend-Medium',
                            fontSize: 14,
                            lineHeight: 17.5,
                            color: '#BABABE'
                        }}
                    >
                        {`/${length}`}
                    </AppText>

                </View>

            </View>

            <AppText
                style={{
                    fontFamily: 'Lexend-SemiBold',
                    fontSize: 20,
                    lineHeight: 33,
                    marginTop: hp('3.0536'),
                }}
            >
                {current?.title}
            </AppText>

            <AppText
                style={{
                    lineHeight: 15,
                    color: colors.fontLighBlack,
                    marginTop: hp('1.1104'),
                    marginBottom: hp('2.776')
                }}
            >
                {current?.description}
            </AppText>

            <Shadow
                distance={20}
                startColor={colors.shadowDrop}
                // endColor={colors.foreground}
                // offset={[5, 20]}
                style={{
                    width: '100%',
                    height:hp('42')
                }}
            >
                <FlatList
                    data={current?.otptions}
                    style={{ backgroundColor: colors.shadowDrop }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <OptionComp
                                title={item}
                                checkTitle={item}
                                onSelect={(item) => console.log(item)}
                            />
                        );
                    }}
                />

            </Shadow>

            <AppButton
                title='Next'
                isSec
                style={{
                    marginBottom: hp('5.552'),
                    position: 'absolute',
                    bottom: 0
                }}
                onPress={() => {
                    if (currentIndex + 1 != length) {
                        setCurrent(question[currentIndex + 1]);
                        setCurrentIndex(currentIndex + 1)
                    }
                    else {
                        Alert.alert('Completed')
                    }
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default SurveyScreen;
