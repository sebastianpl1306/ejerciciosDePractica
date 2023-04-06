import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');
 
describe('Pruebas en <MultipleCustomHooks/>', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('MultipleCustomHooks'));
        expect(screen.getByText('Cargando...'));

        const button = screen.getByRole('button', {name: 'Cargar Mas'})
        expect(button.disabled).toBeTruthy();
    })

    test('Debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: {results: [{name: 'Pikashu'}]},
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Pikashu')).toBeTruthy();

        const button = screen.getByRole('button', {name: 'Cargar Mas'})
        expect(button.disabled).toBeFalsy();
    });

    test('Debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: {results: [{name: 'Pikashu'}]},
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        const button = screen.getByRole('button', {name: 'Cargar Mas'});
        fireEvent.click(button);

        expect(mockIncrement).toBeCalled();
    });
})