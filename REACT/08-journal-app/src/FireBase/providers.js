import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const { displayName, email, photoURL, uid } = result.user;

        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        const errorCredential = GoogleAuthProvider.credentialFromError(error);
        return{
            ok: false,
            errorCode,
            errorMessage,
            errorCredential
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) =>{
    try {
        const res = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = res.user;
        updateProfile(FirebaseAuth.currentUser, { displayName });

        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const loginWithEmailPassword = async({email, password}) =>{
    try {
        const result = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { displayName, photoURL, uid } = result.user;

        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFireBase = async() =>{
    try {
        FirebaseAuth.signOut();
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorCode,
            errorMessage
        }
    }
}