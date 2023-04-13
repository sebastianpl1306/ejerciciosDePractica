import { useReducer } from 'react';
import { AuthContext, authReducer } from './';
import { types } from '../types/types';

const init = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    return{
        logget: !!user,
        user
    }
}

export const AuthProvider = ({children}) => {
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = (name) =>{
        const user = {
            id: 'ABC',
            name
        }

        localStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: types.login,
            payload: user
        });
    };

    const logout = () =>{
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
            payload: null
        };

        dispatch(action);
    };

    return(
        <AuthContext.Provider value={{
            ...authState, 
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}