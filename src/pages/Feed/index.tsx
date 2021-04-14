import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useNavigation} from "@react-navigation/native"

import directIcon from '../../assets/send.png';
import hearthIcon from '../../assets/heart.png';
import addIcon from '../../assets/add.png';


import { 
  Container, 
  ImageInstagram ,
  ViewHeaderInstagram, 
  ButtonDirect, 
  IconHeader, 
  ViewButtonsHeader 
} from './styles';
import ComponentStories from '../../components/ComponentStories';

const Feed: React.FC = () => {

  const {navigate} = useNavigation();
  return (
    <Container>
      <StatusBar   />
      <ViewHeaderInstagram>
        <ImageInstagram 
          resizeMode="contain"
          source={{uri:'https://images-ext-1.discordapp.net/external/9p6QyCk1Pdyo8GKhZw-Q8GdgWYMxAaviWPyVOf6wS0k/https/upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'}}
        
        />
        <ViewButtonsHeader>
          <IconHeader source={addIcon}  resizeMode="contain"/>
          <IconHeader source={hearthIcon} resizeMode="contain"/>

          <ButtonDirect onPress={()=>navigate('Direct')}>
            <IconHeader source={directIcon}    resizeMode="contain"/>
          </ButtonDirect>
        </ViewButtonsHeader>        
        
      </ViewHeaderInstagram>

      <ComponentStories>

      </ComponentStories>
      
    </Container>


  );
}

export default Feed;