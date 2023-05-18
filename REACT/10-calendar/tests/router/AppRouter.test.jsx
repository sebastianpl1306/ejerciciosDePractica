import { render, screen } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { AppRouter } from '../../src/routes/AppRouter';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../src/hooks/useAuthStore');
jest.mock('../../src/calendar/pages/CalendarPage', () =>({
    CalendarPage: () => <h1>CalendarPage</h1>
}));

describe('Pruebas en <AppRouter/>', () => {
    const mockCheckAuthToken = jest.fn();
    beforeEach(()=>jest.clearAllMocks());

    test('Debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {
        useAuthStore.mockReturnValue({
            status: 'checking',
            checkAuthToken: mockCheckAuthToken
        });

        render(
            <AppRouter/>
        )

        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(mockCheckAuthToken).toBeCalled();
    })

    test('Debe de mostrar el login en caso de no estar autenticado', () => {
        useAuthStore.mockReturnValue({
            status: 'not-authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        const { container } = render(
            <MemoryRouter>
                <AppRouter/>
            </MemoryRouter>
        )

        expect( screen.getByText('Ingreso')).toBeTruthy();
        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar el calendario si esta autenticado', () => {
        useAuthStore.mockReturnValue({
            status: 'authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        render(
            <MemoryRouter>
                <AppRouter/>
            </MemoryRouter>
        )

        expect(screen.getByText('CalendarPage')).toBeTruthy();
    })
})