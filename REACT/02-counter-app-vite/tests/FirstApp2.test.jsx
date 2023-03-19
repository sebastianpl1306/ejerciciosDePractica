import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {
    const title = 'Hola, soy Sebastian';
    const subtitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title}/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola, soy Sebastian"', () => {
        render(<FirstApp title={ title }/>);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe de mostrar el título en el p', () => {
        render(<FirstApp title={ title }/>);
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subtitle={subtitle}/>);
        expect( screen.getAllByText(subtitle).length ).toBe(2);
    })
})