import React from "react";
import { Container, NomeTela, CustomButton, CustomButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import FBAuthExceptions from "../../integrations/firebase/FBAuthExceptions";

export default () => {

    const navigation = useNavigation();

    const handleSignOutButtonClick = () => {

        auth().signOut()
            .then(() => {
                navigation.reset({
                    routes: [{name: 'SignIn'}]
                })    
            })
            .catch((error) => {FBAuthExceptions(error)})
            
    }

    return (
        <Container>
            <NomeTela>Home</NomeTela>
 
            <CustomButton onPress={handleSignOutButtonClick}>
                <CustomButtonText>LOGOUT</CustomButtonText>
            </CustomButton>
        </Container>
    );
}