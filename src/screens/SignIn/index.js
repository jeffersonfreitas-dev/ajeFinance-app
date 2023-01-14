import React, {useState} from "react";
import SignInput from "../../components/SignInput";
import { useNavigation } from "@react-navigation/native";
import { Container, NomeTela, AreaLogin, AreaLoginInput, 
    CustomButton, CustomButtonText, SignMessageButton, 
    SignMessageButtonText, SignMessageButtonTextBold } from "./styles";

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import auth from "@react-native-firebase/auth";

export default () => {
    const navigation = useNavigation();

    const [inpEmail, setInpEmail] = useState('teste@gmail.com');
    const [inpPassword, setInpPassword] = useState('123456');

    const handleNotHaveAccountButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
        
    }

    const handleSignInButtonClick = async () => {
        
        const user = await auth()
            .signInWithEmailAndPassword(inpEmail, inpPassword)
            .then((loggedIdUser) => {

                if(loggedIdUser) {
                    navigation.reset({
                        routes: [{name:'MainTab'}]
                    });
                }
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    alert('Endereço de e-mail inválido!');
                  }
            
                  if (error.code === 'auth/user-not-found') {
                    alert('Usuário não encontrado!');
                  }

                  if (error.code === 'auth/wrong-password') {
                    alert('Usuário e/ou senha inválidos!');
                  }
                  console.log(error);
            });

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