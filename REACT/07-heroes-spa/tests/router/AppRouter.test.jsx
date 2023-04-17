import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
    test('Debe mostrar el login si no esta autenticado', () => {
        const contextValue = {
            logget: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(1);
    })

    test('Debe de mostrar el componente de Marvel si está autenticado', () => {
        const contextValue = {
            logget: true,
            user: {
                id: 'abc',
                name: 'Sebastian Pabon Lopez'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Marvel')).toBeTruthy();
    })
})