import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';
import { render, screen } from '@testing-library/react';

describe('Pruebas en <MainApp/>', () => {
    test('Debe de mostrar HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('HomePage')).toBeTruthy();
    })

    test('Debe de mostrar LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy();
    })
})