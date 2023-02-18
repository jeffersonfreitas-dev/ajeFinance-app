import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, NomeTela, CustomButton, CustomButtonText} from "./styles";
import MainDrawer from "../../../stacks/MainDrawer"

export default () => {

    const navigation = useNavigation();

    handleSignOutButtonClick = () => {
        navigation.reset({
            routes: [{name: MainDrawer}]
        })
    }

    return (
        <Container>
            <NomeTela>BillpayRegister</NomeTela>
            <CustomButton onPress={handleSignOutButtonClick}>
                <CustomButtonText>LOGOUT</CustomButtonText>
            </CustomButton>
        </Container>
    );
}