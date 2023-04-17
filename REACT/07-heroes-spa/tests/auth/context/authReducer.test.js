import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en authReducer', () => {
    const initialState = {
        logget: false,
        user: {}
    }

    const user = {
        id: 'ABC',
        name: 'Sebastian Pabon Lopez'
    }

    test('Debe retornar el estado por defecto', () => {
        const newState = authReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('Debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: user
        }

        const newState = authReducer(initialState, action);

        expect(newState.logget).toBeTruthy();
        expect(newState.user).toBe(user);
    })

    test('Debe de (logout) borrar el name del usuario y logget en false', () => {
        const action = {
            type: types.logout
        }

        const newState = authReducer(initialState, action);

        expect(newState).toEqual({logget: false});
    })
})