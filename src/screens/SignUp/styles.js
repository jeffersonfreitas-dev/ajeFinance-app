import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const NomeTela = styled.Text`
    font-size: 20px;
    color: #000;
`;

export const AreaCadastro = styled.View`
    width: 100%;
`;

export const AreaCadastroInput = styled.View`
    padding: 40px;
`;

export const AreaCadastroButton = styled.View`
    margin-top: 5px;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #000;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 20px;
    color: #fff;
`;
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 50px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 14px;
    color: #000;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 14px;
    color: #000;
    font-weight: bold;
`;
