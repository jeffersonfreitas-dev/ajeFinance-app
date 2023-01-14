import React, {useState} from "react";
import SignInput from "../../components/SignInput";
import { useNavigation } from "@react-navigation/native";
import service from "../../ApiService";
import { Container, NomeTela, AreaLogin, AreaLoginInput, 
    CustomButton, CustomButtonText, SignMessageButton, 
    SignMessageButtonText, SignMessageButtonTextBold } from "./styles";

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import auth from "@react-native-firebase/auth";
import FBAuthExceptions from "../../integrations/firebase/FBAuthExceptions";

export default () => {
    const navigation = useNavigation();

    const [inpEmail, setInpEmail] = useState('teste@gmail.com');
    const [inpPassword, setInpPassword] = useState('123456');

    const handleNotHaveAccountButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
        
    }

    const handleSignInButtonClick = () => {
        
        const user = auth()
            .signInWithEmailAndPassword(inpEmail, inpPassword)
            .then((loggedIdUser) => {
                return loggedIdUser;
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('Endereço de e-mail inválido!');
                  }
            
                  if (error.code === 'auth/user-not-found') {
                    console.log('Usuário não encontrado!');
                  }
            });

        
        //TODO: Mesmo quando o usuário erra o email esta direcionando para o home
        if(user) {
            //userDispatch
            navigation.reset({
                routes: [{name:'MainTab'}]
            });
        } else {
            alert("Não foi")
        }

    }

    return (
        <Container>
            <NomeTela>SignIn</NomeTela>
            <AreaLogin>
                <AreaLoginInput>
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
                </AreaLoginInput>

                <AreaLoginInput>
                    <CustomButton onPress={handleSignInButtonClick}>
                        <CustomButtonText>LOGIN</CustomButtonText>
                    </CustomButton>
                

                    <SignMessageButton onPress={handleNotHaveAccountButtonClick}>
                        <SignMessageButtonText>Não possui uma conta? </SignMessageButtonText>
                        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                    </SignMessageButton>
                </AreaLoginInput>
            </AreaLogin>
        </Container>
    );
}