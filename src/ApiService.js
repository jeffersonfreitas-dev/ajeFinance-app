import firebaseService from "./integrations/firebase/FBService";

export default {
    createUserWithEmailAndPassword: (email, password) => {
        return firebaseService.createUserWithEmailAndPassword(email, password);
    },
    
    signInWithEmailAndPassword: (email, password) => {
        return firebaseService.signInWithEmailAndPassword(email, password);
    },

    logout: () => {
        return firebaseService.signOut();
    },

    onAuthStateChanged: () => {
        return firebaseService.onAuthStateChanged();
    }
}
