import React, { useEffect, useState } from "react";
import { Container, NomeTela } from "./styles";
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigation = useNavigation();
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
      }

    useEffect(() => {
        auth().onAuthStateChanged(onAuthStateChanged);

        if (!user) {
           navigation.reset({
            routes: [{name: 'SignIn'}]
           })
        }else {
            navigation.reset({
                routes: [{name: 'MainTab'}]
            })
        }
    },[]);



    return (
        <Container>
            <NomeTela>Preload</NomeTela>
        </Container>
    );
}