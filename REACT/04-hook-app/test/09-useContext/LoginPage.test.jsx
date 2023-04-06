import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('pruebas en <LoginPage/>', () => {
    const userInfo = { id: 123, name: 'Juan', email: 'juan@google.com' };
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const pre = screen.getByLabelText('pre');
        expect(pre.innerHTML).toBe('null');
    })

    test('Debe de llamar el setUser cuando se hace click en el boton', () => {
        const setUser = jest.fn();
        render(
            <UserContext.Provider value={{user: null, setUser}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const buttonSetUser = screen.getByRole('button');
        fireEvent.click(buttonSetUser);

        expect(setUser).toBeCalledWith(userInfo);
    })
})