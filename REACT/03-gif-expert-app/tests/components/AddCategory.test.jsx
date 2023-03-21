import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
    const valueText = 'Naruto';
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onAddNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: valueText}});
        expect(input.value).toBe(valueText);
    })

    test('Debe de llamar onAddNewCategory si el input tiene un valor', () => {
        const onAddNewCategory = jest.fn();

        render(<AddCategory onAddNewCategory={onAddNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: valueText}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddNewCategory).toHaveBeenCalled();
        expect(onAddNewCategory).toHaveBeenCalledTimes(1);
        expect(onAddNewCategory).toHaveBeenCalledWith(valueText);
    })

    test('No debe de llamar el onAddNewCategory si el input está vació', () => {
        const onAddNewCategory = jest.fn();

        render(<AddCategory onAddNewCategory={onAddNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);
        expect(onAddNewCategory).not.toHaveBeenCalled();
    })
})