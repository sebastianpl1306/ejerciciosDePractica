import { loginWithEmailPassword, logoutFireBase, registerUserWithEmailPassword, singInWithGoogle } from '../../FireBase/providers';
import { clearNotesLogout } from '../journal';
import { checkingCredentials, logout, login } from './authSlice';

export const startGoogleSignIn = () =>{
    return async( dispatch ) =>{
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();

        if(!result.ok) return dispatch(logout(result.errorMessage));
        
        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) =>{
    return async( dispatch ) =>{
        dispatch(checkingCredentials());
        
        const result = await registerUserWithEmailPassword({ email, password, displayName});
        if(!result.ok) return dispatch(logout({errorMessage: result.errorMessage }));

        dispatch(login(result));
    }
}

export const startSignInWithEmailPassword = ( email, password ) =>{
    return async( dispatch ) =>{
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        if(!result.ok) return dispatch(logout({errorMessage: result.errorMessage }));

        dispatch(login(result));
    }
}

export const startLogout = () =>{
    return async( dispatch ) =>{
        await logoutFireBase();

        dispatch( clearNotesLogout() );
        dispatch(logout());
    }
}