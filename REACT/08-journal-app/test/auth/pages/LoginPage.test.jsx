import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth/authSlice';
import { notAuthenticatedState } from '../../fixtures/authFixtures';
// import { startGoogleSignIn } from '../../../src/store/auth/thunks';

const mockStartGoogleSignIn = jest.fn();
const mockStartSignInWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks',()=>({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startSignInWithEmailPassword: (email, password) => {
       return () => mockStartSignInWithEmailPassword(email, password)
    }
}))

jest.mock('react-redux', ()=>({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('Pruebas en <LoginPage/>', () => {
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente correctamente', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
    })

    test('Boton de google debe de llamar el startGoogleSignIn', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        const btnGoogle = screen.getByLabelText('btn-google');
        fireEvent.click(btnGoogle);
        expect( mockStartGoogleSignIn ).toHaveBeenCalled()
    })

    test('submit debe de llamar startLoginWithEmailPassword', () => {
        const email = 'sebastian@google.com';
        const password = '12345678';

        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        const emailField = screen.getByRole('textbox', { name: 'Correo' });
        fireEvent.change( emailField, { target: {name: 'email', value: email}});

        const passwordField = screen.getByTestId('password');
        fireEvent.change( passwordField, { target: {name: 'password', value: password}});

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit( loginForm );

        expect( mockStartSignInWithEmailPassword ).toBeCalledWith(email, password);
    })
})