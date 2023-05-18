import { authSlice, clearErrorMessage, onLogin, onLogout } from '../../../src/store/auth/authSlice';
import { autheticatedState, initialState } from '../../__fixtures__/authStates';
import { testUserCredentials } from '../../__fixtures__/testUser';

describe('Pruebas en authSlice', () => {
    test('Debe regresar el estado inicial', () => {
        expect( authSlice.getInitialState()).toEqual(initialState);
    })

    test('Debe de realizar un login', () => {
        const state = authSlice.reducer(initialState, onLogin( testUserCredentials ));
        expect(state).toEqual({
            status: 'autheticated',
            user: testUserCredentials,
            errorMessage: undefined
        })
    })

    test('Debe de realizar un logout', () => {
        const state = authSlice.reducer(autheticatedState, onLogout());
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    })

    test('Debe de realizar un logout y mostrar un error', () => {
        const errorMessage = 'Credenciales invalidas';
        const state = authSlice.reducer(autheticatedState, onLogout(errorMessage));
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: errorMessage
        })
    })

    test('Debe de limpiar el mensaje de error', () => {
        const errorMessage = 'Credenciales invalidas';
        const state = authSlice.reducer(autheticatedState, onLogout(errorMessage));
        const newState = authSlice.reducer( state, clearErrorMessage());

        expect( newState.errorMessage ).toBe( undefined );  
    })
})