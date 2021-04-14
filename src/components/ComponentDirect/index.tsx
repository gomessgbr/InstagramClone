import React, {useEffect, useState} from 'react';
import { View } from 'react-native'; 
import { Container,ScrowViewDirect,DirectChat,ImageProfile,TextNameProfile,ChatPreviewTxt,ViewDirectChat } from './styles';

import {direct} from '../../helpers/direct.data';


interface directTypes {
    image:string;
    name:string;
    chatPreview:string;
}


const ComponentDirect: React.FC = () => {
    const [listDirect,setListDirect]= useState<directTypes[]>([]);

    useEffect(()=>{
        setListDirect(direct);
    },[]);



  return (
    <Container>
        <ScrowViewDirect>
            {listDirect.map(loadDirect=>(
                <DirectChat>
                    <ImageProfile source={{uri:loadDirect.image}}/>
                    <ViewDirectChat>
                        <TextNameProfile>{loadDirect.name}</TextNameProfile>
                        <ChatPreviewTxt>{loadDirect.chatPreview}</ChatPreviewTxt>
                    </ViewDirectChat>
                    
                </DirectChat>

            ))}
        </ScrowViewDirect>
        
    </Container>

);



}

export default ComponentDirect;