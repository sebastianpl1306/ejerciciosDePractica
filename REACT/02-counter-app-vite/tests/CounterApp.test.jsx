import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en el componente CounterApp', () => {
    const initial=0;

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initial}/>);
        expect( container ).toMatchSnapshot();
    })

    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initial}/>);
        expect( parseInt(screen.getByTestId('container-counter').innerHTML) ).toBe(initial);
    })

    test('Debe de incrementar con el boton +1', () => {
        render(<CounterApp value={initial}/>);
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText(`${initial + 1}`) ).toBeTruthy();
    })

    test('Debe de decrementar con el boton -1', () => {
        render(<CounterApp value={initial}/>);
        fireEvent.click( screen.getByText('-1') );

        expect( parseInt(screen.getByTestId('container-counter').innerHTML) ).toBe(initial-1);
    })

    test('Debe de funcionar el boton reset', () => {
        render(<CounterApp value={initial}/>);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );

        expect( screen.getByText( initial ) ).toBeTruthy();
    })
})