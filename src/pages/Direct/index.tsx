import React from 'react';
import { View,Text } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {SearchBar} from 'react-native-elements';


import ComponentDirect from '../../components/ComponentDirect';

import videoCam from '../../assets/videocamBlack.png';
import newChat from '../../assets/newChat.png';
import back from '../../assets/left-arrow.png';
import cam from '../../assets/camera-blue.png';

import { Container,ViewContainer,TextFooter, ViewFooter ,ButtonFooter, TextDirect,ViewHeaderDirect,IconHeader,FooterImage,ButtonsHeader} from './styles';

const Direct: React.FC = () => {
    return (
        <Container>
            <StatusBar/>
            <ViewHeaderDirect>
                <IconHeader source={back} resizeMode="contain"/>
                <TextDirect>Gomão</TextDirect>
                <ButtonsHeader>                    
                    <IconHeader source={videoCam} resizeMode="contain"/>
                    <IconHeader source={newChat} resizeMode="contain"/>                                     
                </ButtonsHeader>

            </ViewHeaderDirect>            
            <SearchBar platform='ios'/>
            <ViewContainer>
                <ComponentDirect></ComponentDirect>             

            </ViewContainer>
            <ViewFooter>
                <ButtonFooter>
                    <FooterImage source={cam} resizeMode="contain"/>
                    <TextFooter>Câmera</TextFooter>                
                </ButtonFooter>
            </ViewFooter>

        
        </Container>
    );
}

export default Direct;