import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api';
import { onChecking, onLogin, onLogout, onLogoutCalendar } from '../store';

export const useAuthStore = () =>{
    const dispatch = useDispatch();
    const { status, user, errorMessage } = useSelector((state) => state.auth);

    const startLogin = async({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
        }
    }

    const startRegister = async({ email, password, name }) =>{
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            const { data } = error.response;
            if (data.msg) dispatch(onLogout(data.msg));
            if (data.errors) dispatch(onLogout('Ups! No se pudo realizar el registro'));
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch( onLogout('El token expiro') );
        try {
            const { data } = await calendarApi.get('auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout('El token expiro') );
        }
    }

    const startLogout = () =>{
        localStorage.clear();
        dispatch(onLogoutCalendar());
        dispatch(onLogout());
    }

    return{
        //propiedades
        status,
        user,
        errorMessage,

        //metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}