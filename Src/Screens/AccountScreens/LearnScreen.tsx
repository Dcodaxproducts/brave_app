import React,{useEffect} from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DocumentsComp from '../../Components/Common/DocumentsComp';
import { GetLearn } from '../../Store/Learn/AsyscThunkOperations/GetLearn';

const LearnScreen = () => {

    const learnString=useSelector((state:any)=>state.LearnReducer.string)
    const dispatch=useDispatch<any>();

    useEffect(()=>{
        if(!learnString)
        dispatch(GetLearn());
    },[learnString])

  return(
    <DocumentsComp
        string={learnString}
    />
  );
}

export default LearnScreen;