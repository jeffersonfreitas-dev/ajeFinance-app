import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, NomeTela, HeaderArea, ContentArea} from "./styles";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <HeaderArea>

            </HeaderArea>
            <ContentArea>
                <NomeTela>Conta Pagar</NomeTela>
            </ContentArea>
        </Container>
    );
}