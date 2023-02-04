import React, {useState} from "react";
import SignInput from "../../components/SignInput";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import { Container, NomeTela, AreaCadastro, AreaCadastroInput, 
    CustomButton, CustomButtonText, SignMessageButton, 
    SignMessageButtonText, SignMessageButtonTextBold } from "./styles";

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import PersonIcon from "../../assets/person.svg";

export default () => {

    const USER_COLLECTION = 'users';

    const navigation = useNavigation();

    const [inpName, setInpName] = useState("");
    const [inpEmail, setInpEmail] = useState("");
    const [inpPassword, setInpPassword] = useState("");

    const handleHaveAccountButtonClick = () => {
        navigation.navigate('SignIn');
    }

    const saveUserFirestore = async (user) => {
        //Adicionando o usuário criado no firestore
        await firestore().collection(USER_COLLECTION).doc(user.uid)
                .set({
                    name: inpName,
                    email: inpEmail
                }).then(() => {
                    //Redirecionando o usuário recem-criado para a Home
                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    })
                })
    }

    const createDefaultAccountPlanToUser = async (user, type) => {

        await firestore().collection(USER_COLLECTION).doc(user)
        .add(["Salário", "Serviços", "Rendimentos"])
        .then(() => {
            console.log("OK")
        })
    }

    const handleSignUpButtonClick = async () => {
        await auth().createUserWithEmailAndPassword(inpEmail, inpPassword)
            .then((result) => {
                firestore().collection(USER_COLLECTION).doc(result.user.uid)
                .set({
                    name: inpName,
                    email: inpEmail,
                    account_plan_credit: ["Salário", "Serviços", "Rendimentos"],
                    account_plan_debit: ["Aluguel", "Internet", "Impostos"]
                }).then(() => {
                    //Redirecionando o usuário recem-criado para a Home
                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    })
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('E-mail já cadastrado!');
                }
            })
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