import auth from "@react-native-firebase/auth";
import FBAuthExceptions from "./FBAuthExceptions";

export default {

    signInWithEmailAndPassword: (email, password) => {
        auth().signInWithEmailAndPassword(email, password)
            .then((loggedIdUser) => {
                return loggedIdUser;
            })
            .catch(error => {
                FBAuthExceptions(error);
            })
    },

    signOut: () => {
        auth().signOut()
            .then(() => {alert("SignOut")})
            .catch(() => {return false})
    },

    createUserWithEmailAndPassword: async (email, password) => {
        await auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(`Novo usuário criado com e-mail: ${email}`)
                return user;
            })
            .catch(error => {
                FBAuthExceptions(error);
            })
    },

    onAuthStateChanged: () => {
        return auth().onAuthStateChanged();
    }
}