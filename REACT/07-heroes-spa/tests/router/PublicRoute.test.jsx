import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';

describe('Pruebas en <PublicRoute/>', () => {
    test('Debe mostrar el children si no esta autenticado', () => {
        const contextValue ={
            logget: false, 
            login: () => {}, 
            logout: () => {}
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Pantalla login</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pantalla login')).toBeTruthy();
    })

    test('Debe navegar si esta autenticado', () => {
        const contextValue ={
            logget: true,
            user:{
                id: 'ABC',
                name: 'Sebastian Pabon Lopez'
            },
            login: () => {}, 
            logout: () => {}
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Pantalla login</h1>
                            </PublicRoute>
                        }/>
                        <Route path='/' element={<h1>Pagina marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina marvel')).toBeTruthy();
    })
})