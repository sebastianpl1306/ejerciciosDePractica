import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { render, screen } from '@testing-library/react';

describe('Pruebas en PrivateRoute', () => {
    test('Debe de guardar la ultima ruta visitada', () => {
        Storage.prototype.setItem = jest.fn();

        const contextValue ={
            logget: true, 
            login: () => {}, 
            logout: () => {}
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=hola']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(localStorage.setItem).toBeCalled();
    })
})