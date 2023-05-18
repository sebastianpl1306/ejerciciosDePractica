import { act, renderHook } from '@testing-library/react'
import { useAuthStore } from '../../src/hooks'
import { Provider } from 'react-redux';
import { authSlice, store } from '../../src/store';
import { configureStore } from '@reduxjs/toolkit';
import { initialState, notAuthenticatedState } from '../__fixtures__/authStates';
import { testUserCredentials } from '../__fixtures__/testUser';
import { calendarApi } from '../../src/api';

const getMockStore = ( stateInitial ) =>{
    return configureStore({
        reducer:{
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: {...stateInitial}
        }
    })
}

describe('Pruebas en useAuthStore', () => {
    beforeEach(()=> localStorage.clear());

    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook(()=>useAuthStore(),{
            wrapper: ({ children }) => <Provider store={ store }>{ children }</Provider>
        });

        expect(result.current).toEqual({
            status: 'checking',
            user: {},
            errorMessage: undefined,
            startLogin: expect.any(Function),
            startRegister: expect.any(Function),
            checkAuthToken: expect.any(Function),        
            startLogout: expect.any(Function)
        });
    })

    test('startLogin debe de realizar el login correctamente', async() => {
        const mockStore = getMockStore({...notAuthenticatedState});
        const { result } = renderHook(()=>useAuthStore(),{
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        await act(async()=>{
            await result.current.startLogin( testUserCredentials );
        });

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'autheticated',
            user: { name: 'Test User', uid: '645fb2d467d83b123590c1cb' }
        });

        expect( localStorage.getItem('token') ).toEqual( expect.any(String));
        expect( localStorage.getItem('token-init-date') ).toEqual( expect.any(String));
    })

    test('El startLogin debe de fallar la autenticación', async() => {
        const mockStore = getMockStore({...notAuthenticatedState});
        const { result } = renderHook(()=>useAuthStore(),{
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        await act(async()=>{
            await result.current.startLogin({ email: 'error@gmail.com', password: '12345678'});
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: expect.any(String),
            status: 'not-authenticated',
            user: {}
        })
        expect( localStorage.getItem('token') ).toBe(null);
    })

    test('startRegister debe de crear un usuario', async() => {
        const newUser = { 
            email: 'error@gmail.com', 
            password: '12345678', 
            name:'Test User 2'
        };

        const mockStore = getMockStore({...notAuthenticatedState});
        const { result } = renderHook(()=>useAuthStore(),{
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        const spy = jest.spyOn( calendarApi, 'post').mockReturnValue({
            data: {
                ok: true,
                uid: "123456789",
                name: "Test User",
                token: "TOKEN-LOGIN"
            }
        })

        await act(async()=>{
            await result.current.startRegister(newUser);
        })

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'autheticated',
            user: { name: 'Test User', uid: '123456789' }
        });

        spy.mockRestore();
    })

    test('startRegister debe de fallar la creación', async() => {
        const mockStore = getMockStore({...notAuthenticatedState});
        const { result } = renderHook(()=>useAuthStore(),{
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        await act(async()=>{
            await result.current.startRegister(testUserCredentials);
        })

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: expect.any(String),
            status: 'not-authenticated',
            user: {}
        });
    })

    test('checkAuthToken debe de fallar si no hay token', async() => {
        const mockStore = getMockStore({...initialState});
        const { result } = renderHook(()=>useAuthStore(),{
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        await act(async()=>{
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: expect.any(String),
            status: 'not-authenticated',
            user: {}
        })
    })

    test('checkAuthToken debe de autenticar el usuario si hay un token', async() => {
        const mockStore = getMockStore({...initialState});
        const { result } = renderHook(()=>useAuthStore(),{
            wrapper: ({ children }) => <Provider store={ mockStore }>{ children }</Provider>
        });

        const { data } = await calendarApi.post('/auth', testUserCredentials);
        localStorage.setItem('token',data.token);

        await act(async()=>{
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'autheticated',
            user: {
                name: "Test User",
                uid: "645fb2d467d83b123590c1cb",
            }
        })
    })
})