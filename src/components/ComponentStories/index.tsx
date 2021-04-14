import React, {useEffect,useState} from 'react';
import { Container,ScrowViewListStories,TextNameProfile,ImageProfile,ButtonStorie } from './styles';
import {stories} from '../../helpers/stories.data';


interface storiesTypes {
    image: string;
    name:string;
}


const ComponentStories: React.FC = () => {
    const [listStories,setListStories]= useState<storiesTypes[]>([]);

    useEffect(() => {
    setListStories(stories);

    },[])
  return (
    <Container>
        <ScrowViewListStories horizontal>
            {listStories.map(storie=>( 
                <ButtonStorie>
                    <ImageProfile source = {{uri:storie.image}}/>
                    <TextNameProfile>{storie.name}</TextNameProfile>
                </ButtonStorie>
            ))}
        </ScrowViewListStories>

    </Container>
  );
}

export default ComponentStories;