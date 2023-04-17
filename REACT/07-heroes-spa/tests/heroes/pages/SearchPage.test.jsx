import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heores/pages/SearchPage';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <SearchPage/>', () => {
    beforeEach(()=> jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrarse el hero cuando tenga el query parameter', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        expect( screen.getByText('Batman') ).toBeTruthy();

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/heroes/dc-batman.jpg');

        const divSearch = screen.getByLabelText('div-serch-hero');
        expect( divSearch.style.display ).toContain('none');

        const divNoHero = screen.getByLabelText('div-no-hero');
        expect( divNoHero.style.display ).toContain('none');
    })

    test('Debe de mostrar un error si no encuentra el hero (batman123)', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const divSearch = screen.getByLabelText('div-serch-hero');
        expect( divSearch.style.display ).toContain('none');

        const divNoHero = screen.getByLabelText('div-no-hero');
        expect( divNoHero.style.display ).toContain('');
    })

    test('Debe de llamar el navigate a la pantalla nueva', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'batman'}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( mockUseNavigate ).toBeCalledWith('?q=batman');
    })
});