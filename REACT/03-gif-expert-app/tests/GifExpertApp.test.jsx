import { fireEvent, getAllByText, getByRole, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => {
    const categoryTest = 'One Punch';
    test('Cuando se llame una categoria que ya existe no se debe cargar nuevamente', () => {
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: categoryTest}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: categoryTest}});
        fireEvent.submit(form);

        expect(screen.getAllByText(categoryTest).length).toBe(1)
    })

    test('Cuando se cree una categoria se debe renderizar', () => {
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: categoryTest}});
        fireEvent.submit(form);

        expect(screen.getByText(categoryTest)).toBeTruthy();
    })
})