import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Shadow } from 'react-native-shadow-2';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../Components/Common/AppButton';
import ScreenContainer from '../Components/Common/ScreenContainer';
import OptionComp from '../Components/SurveyScreen/OptionComp';
import AppText from '../Components/Text/AppText';
import colors from '../Config/colors';
import ScreenStyle from '../Config/Styles/common/ScreenStyle';
import { authSurveyCompleted } from '../Store/Auth/AuthSlice';
import { GetSurveyQuestions } from '../Store/Survey/AsyscThunkOperations/GetSurveyQuestions';
import { PostSurveyAnswers } from '../Store/Survey/AsyscThunkOperations/PostSurveyAnswers';

interface questionObj {
    question?: string;
    description?: string;
    answers?: string[];
    question_description?: string;
    id?: string;
}

interface SurveyAnswerObj {
    question_id?: string,
    answer?: string
}

const SurveyScreen = () => {

    const [length, setLength] = useState<number>(0);
    const [current, setCurrent] = useState<questionObj>();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedItem, setSelectedItem] = useState('');
    const [survayAnswers, setSurvayAnswer] = useState<SurveyAnswerObj[]>([]);

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const QUESTIONS = useSelector((state: any) => state.SurveyReducer.questions);
    const USER = useSelector((state: any) => state.AuthReducer.user);
    const dispatch = useDispatch<any>();


    useEffect(() => {
        if (!QUESTIONS) dispatch(GetSurveyQuestions());
    }, [QUESTIONS])

    useEffect(() => {
        if (QUESTIONS) {
            setLength(QUESTIONS.length);
            setCurrent(QUESTIONS[currentIndex]);
        }
    }, [QUESTIONS])

    return (
        <ScreenContainer>

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
                {current?.question}
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
                style={{
                    width: '100%',
                    height: hp('42')
                }}
            >
                <FlatList
                    data={current?.answers}
                    style={{ backgroundColor: colors.shadowDrop, }}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {

                        return (

                            <OptionComp
                                title={item}
                                checkTitle={selectedItem}
                                onSelect={(item) => setSelectedItem(item)}
                            />

                        );
                    }}
                />

            </Shadow>

            <AppButton
                title='Next'
                isSec
                isDisable={selectedItem ? false : true}
                style={{
                    bottom: ScreenStyle.paddingVertical,
                    position: 'absolute'
                }}
                onPress={async () => {
                    if (currentIndex + 1 != length) {
                        setSurvayAnswer([...survayAnswers, { question_id: current?.id, answer: selectedItem }]);
                        setCurrent(QUESTIONS[currentIndex + 1]);
                        setCurrentIndex(currentIndex + 1);
                        setSelectedItem('');
                    }
                    else {
                        console.log([...survayAnswers, { question_id: current?.id, answer: selectedItem }])
                        const res = await dispatch(PostSurveyAnswers([...survayAnswers, { question_id: current?.id, answer: selectedItem }]))
                        if (res.payload.isSuccess==true) {
                            dispatch(authSurveyCompleted())
                            navigation.navigate('Portfolio');
                        }
                    }
                }}
            />

        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default SurveyScreen;
