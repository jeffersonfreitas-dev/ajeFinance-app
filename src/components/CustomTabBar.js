import React from "react";  
import styled from "styled-components/native";

import HomeIcon from '../assets/home.svg';
import FavoriteIcon from '../assets/favorite_full.svg';
import StarIcon from '../assets/star.svg';
import LockIcon from '../assets/lock.svg';
import MyLocationIcon from '../assets/my_location.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #000;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #000;
    margin-top: -20px;
`;

export default ({state, navigation}) => {

    const goTo = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo("Receive")}>
                <FavoriteIcon 
                    width="24" 
                    height="24" 
                    fill="#fff"
                    style={{opacity: state.index===2? 1: 0.5}}
                />
            </TabItem>

            <TabItem onPress={()=>goTo("BillpayDrawer")}>
                <LockIcon 
                    width="24" 
                    height="24" 
                    fill="#fff"
                    style={{opacity: state.index===1? 1: 0.5}}
                />
            </TabItem>

            <TabItemCenter onPress={()=>goTo("Home")}>
                <HomeIcon
                    width="32" 
                    height="32" 
                    fill="#000"
                />
            </TabItemCenter>

            <TabItem onPress={()=>goTo("Transfer")}>
                <MyLocationIcon 
                    width="24" 
                    height="24" 
                    fill="#fff"
                    style={{opacity: state.index===3? 1: 0.5}}
                />
            </TabItem>

             <TabItem onPress={()=>goTo("MainDrawer")}>
                <StarIcon
                    width="24" 
                    height="24" 
                    fill="#fff"
                    style={{opacity: state.index===4? 1: 0.5}}                
                />
            </TabItem>
        </TabArea>
    );
}