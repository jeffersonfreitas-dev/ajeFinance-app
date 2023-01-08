import React from "react";
import SignInput from "../../components/SignInput";
import { Container, NomeTela, AreaLogin, AreaLoginInput, 
    CustomButton, CustomButtonText, SignMessageButton, 
    SignMessageButtonText, SignMessageButtonTextBold } from "./styles";

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
    return (
        <Container>
            <NomeTela>SignIn</NomeTela>
            <AreaLogin>
                <AreaLoginInput>
                    <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail"/>
                    <SignInput IconSvg={LockIcon} placeholder="Digite sua senha"/>
                </AreaLoginInput>

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

                <SignMessageButton>
                    <SignMessageButtonText>Não possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>
            </AreaLogin>
        </Container>
    );
}