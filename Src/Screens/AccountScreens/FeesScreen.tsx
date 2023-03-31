import React,{ useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScreenContainer from '../../Components/Common/ScreenContainer';
import AppText from '../../Components/Text/AppText';
import colors from '../../Config/colors';
import { GetFees } from '../../Store/Fees/AsyscThunkOperations/GetFees';

const FeesScreen = () => {

    const FEES_STR= useSelector((state:any)=> state.FeesReducer.string);
    const dispatch=useDispatch<any>();
    
    useEffect(()=>{
        // if(!FEES_STR){
            dispatch(GetFees());
        // }
    },[FEES_STR])

    return (
        <ScreenContainer>

            <AppText
                style={{
                    lineHeight: 22,
                    color: colors.fontLighBlack,
                    textAlign: 'justify'
                }}
            >
                {FEES_STR}
            </AppText>

        </ScreenContainer>
    );
}
export default FeesScreen;