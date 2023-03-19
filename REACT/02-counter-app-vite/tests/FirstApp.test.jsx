import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola Sebastian';
    //     const { container } = render(<FirstApp title={title}/>);

    //     expect( container ).toMatchSnapshot();
    // });

    test('Debe de mostrar el título en el p', () => {
        const title = 'Hola, soy Sebastian';
        const { container, getByText, getByTestId } = render(<FirstApp title={ title }/>);

        expect( getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Sebastian';
        const subtitle = 'Soy un subtitulo';

        const { getAllByText } = render(
            <FirstApp title={title} subtitle={subtitle}/>
        );

        expect( getAllByText(subtitle).length ).toBe(2);
    })
})