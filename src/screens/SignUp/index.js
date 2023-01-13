import React, {useState} from "react";
import SignInput from "../../components/SignInput";
import { useNavigation } from "@react-navigation/native";

import { Container, NomeTela, AreaCadastro, AreaCadastroInput, 
    CustomButton, CustomButtonText, SignMessageButton, 
    SignMessageButtonText, SignMessageButtonTextBold } from "./styles";

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import PersonIcon from "../../assets/person.svg";

export default () => {

    const navigation = useNavigation();

    const [inpName, setInpName] = useState("");
    const [inpEmail, setInpEmail] = useState("");
    const [inpPassword, setInpPassword] = useState("");

    const handleHaveAccountButtonClick = () => {
        navigation.navigate('SignIn');
    }

    const handleSignUpButtonClick = () => {

    }

    return (
        <Container>
            <NomeTela>SignUp</NomeTela>
            <AreaCadastro>
                <AreaCadastroInput>
                    <SignInput 
                        IconSvg={PersonIcon}
                        placeholder="Digite seu nome"
                        value={inpName}
                        onChangeText={t=> setInpName(t)}
                    />

                    <SignInput 
                        IconSvg={EmailIcon} 
                        placeholder="Digite seu e-mail"
                        value={inpEmail}
                        onChangeText={t=> setInpEmail(t)}
                        />

                    <SignInput 
                        IconSvg={LockIcon} 
                        placeholder="Digite sua senha"
                        value={inpPassword}
                        onChangeText={t=> setInpPassword(t)}
                        password={true}
                        />
                </AreaCadastroInput>

                <AreaCadastroInput>
                    <CustomButton onPress={handleSignUpButtonClick}>
                        <CustomButtonText>CADASTRAR</CustomButtonText>
                    </CustomButton>
                

                    <SignMessageButton onPress={handleHaveAccountButtonClick}>
                        <SignMessageButtonText>Já possui uma conta? </SignMessageButtonText>
                        <SignMessageButtonTextBold>Faça o login</SignMessageButtonTextBold>
                    </SignMessageButton>
                </AreaCadastroInput>
            </AreaCadastro>
        </Container>
    );
}