import React,{useEffect} from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DocumentsComp from '../../Components/Common/DocumentsComp';
import { GetDocuments } from '../../Store/Documents/AsyscThunkOperations/GetDocuments';

const DocumentsScreen = () => {

    const documentsString=useSelector((state:any)=>state.DocumentsReducer.string)
    const dispatch=useDispatch<any>();

    useEffect(()=>{
        if(!documentsString)
        dispatch(GetDocuments());
    },[documentsString])

  return(
    <DocumentsComp
        string={documentsString}
    />
  );
}

export default DocumentsScreen;