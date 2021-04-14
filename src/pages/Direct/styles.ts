import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {height,width} =Dimensions.get('window');

export const Container = styled.View`
    flex:1;
    background-color:#fff;
  
`;
export const ViewHeaderDirect = styled.View`
    justify-content:space-between;
    align-items:center;
    flex-direction:row;    
    margin-top: 20px;
    padding-top:40px;
    

`;

export const ViewContainer = styled.View`
    justify-content:space-between;    
    flex-direction:column;
    height:545px;
    margin-top: 10px;  
    
    

`;
export const ViewFooter = styled.View`
    justify-content:space-between;
    align-items:center;    
    flex-direction:column;
    height:55px;  
   
    

`;

export const TextDirect = styled.Text`
    font-size:20px;
    font-weight:bold;
    margin-left:-100px;
`;

export const ButtonsHeader =styled.TouchableOpacity`
    flex-direction:row;

    


`;
export const IconHeader = styled.Image`
    width:${width/15}px;
    height:50px;
    margin:0 15px;
    

`;

export const IconNewChat = styled.Image`
   
    

`;
export const IconVideoCam = styled.Image`
    

`;




export const FooterImage = styled.Image`
     width:${width/15}px;
     margin-right:10px;
`;
export const ButtonFooter = styled.TouchableOpacity`    
    flex-direction:row;
    width:${width}px;
    height:40px;
    align-items:center; 
    justify-content:center;   

    
`;

export const TextFooter = styled.Text`
    color:#00CCFF;

`;
export const ButtonNewChat = styled.TouchableOpacity``;
export const ButtonCamVideo = styled.TouchableOpacity``;