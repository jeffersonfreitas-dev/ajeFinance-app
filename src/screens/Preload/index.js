import React, { useEffect } from "react";
import { Container, NomeTela } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                //validar token
            }else {
                navigation.navigate("SignIn");
            }
        }
        checkToken();
    },[]);


    return (
        <Container>
            <NomeTela>Preload</NomeTela>
        </Container>
    );
}