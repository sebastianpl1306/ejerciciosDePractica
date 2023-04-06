import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage/>', () => {
    const user = {
        email: "pabonlopez@example.com",
        id: 1,
        name: "Sebastian Pabon Lopez"
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        );
        expect(screen.getByLabelText('pre').innerHTML).toBe('null')
    })

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const pre = screen.getByLabelText('pre');
        expect(pre.innerHTML).toContain('pabonlopez@example.com');
        expect(pre.innerHTML).toContain('1');
        expect(pre.innerHTML).toContain('Sebastian Pabon Lopez');

        const small = screen.getByLabelText('small');
        expect(small.innerHTML).toBe('Sebastian Pabon Lopez');
    })
})