import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { MemoryRouter} from 'react-router-dom';
import { AuthContext } from '../../../src/auth';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <Navbar/>', () => {
    const logout = jest.fn();
    const user = {
        id: 'abc',
        name: 'Sebastian Pabon'
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={{user, logout}}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.findByText(`${user.name}`)).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el botón', () => {
        render(
            <AuthContext.Provider value={{user, logout}}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        const buttonLogout = screen.getByRole('button');
        fireEvent.click(buttonLogout);

        expect(logout).toBeCalled();
        expect(mockUseNavigate).toBeCalledWith("/login", {"replace": true});
    })
})