import React from "react";
import styled from "styled-components/native";

import NewIcon from "../assets/today.svg"

const FloatButtonArea = styled.View`
`;
const FloatButtonContainer = styled.TouchableOpacity`
    background-color: green;
    width: 60px;
    height: 60px;
    border-radius: 35px;
    position: absolute;
    bottom: 10px;
    right: -160px;
`;
const FloatButtonBox = styled.View`
    
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;


export default () => {
    return (
        <FloatButtonArea>
            <FloatButtonContainer>
                <FloatButtonBox>
                    <NewIcon 
                        width="24"
                        height="24" 
                        fill="#000000"
                    />
                </FloatButtonBox>
            </FloatButtonContainer>
        </FloatButtonArea>
    )
}