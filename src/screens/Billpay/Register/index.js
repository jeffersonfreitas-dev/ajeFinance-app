import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, NomeTela, AreaCadastro, AreaCadastroInput, CustomButton, CustomButtonText} from "./styles";
import SignInput from "../../../components/SignInput";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <NomeTela>SignUp</NomeTela>
            <AreaCadastro>
                <AreaCadastroInput>
                    <SignInput 
                        placeholder="Digite seu nome"
                    />

                    <SignInput 
                        placeholder="Digite seu e-mail"
                        />

                    <SignInput 
                        placeholder="Digite sua senha"
                        />
                </AreaCadastroInput>

                <AreaCadastroInput>
                    <CustomButton>
                        <CustomButtonText>SALVAR</CustomButtonText>
                    </CustomButton>
                </AreaCadastroInput>
            </AreaCadastro>
        </Container>
    );
}