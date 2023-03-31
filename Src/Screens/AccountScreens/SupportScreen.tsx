import React,{useEffect} from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DocumentsComp from '../../Components/Common/DocumentsComp';
import { GetSupport } from '../../Store/Support/AsyscThunkOperations/GetSupport';

const SupportScreen = () => {

    const supportString=useSelector((state:any)=>state.SupportReducer.string)
    const dispatch=useDispatch<any>();

    useEffect(()=>{
        if(!supportString)
        dispatch(GetSupport());
    },[supportString])

  return(
    <DocumentsComp
        string={supportString}
    />
  );
}

export default SupportScreen;