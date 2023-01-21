import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, NomeTela} from "./styles";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <NomeTela>Conta Receber!</NomeTela>
        </Container>
    );
}