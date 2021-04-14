import styled from 'styled-components/native';


export const Container = styled.View`    
    width:100%;
    

`;

export const ScrowViewListStories = styled.ScrollView `
    flex-direction:row;
    

`;
export const ButtonStorie = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    margin:0 5px;

`;

const tamanhoDaImagem=50;

export const ImageProfile = styled.Image`
    width:${tamanhoDaImagem}px;
    height:${tamanhoDaImagem}px;
    border-radius:50px;

`;


export const TextNameProfile = styled.Text`    
    margin-top:10px;


`;