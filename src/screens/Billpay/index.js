import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, NomeTela, HeaderArea, ContentArea, FooterArea} from "./styles";
import FloatingButton from "../../components/FloatingButton";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <HeaderArea>

            </HeaderArea>
            <ContentArea>
                <NomeTela>Conta Pagar</NomeTela>
            </ContentArea>
            <FooterArea>
                <FloatingButton />
            </FooterArea>
        </Container>
    );
}