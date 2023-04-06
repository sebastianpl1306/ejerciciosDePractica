import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp/>', () => {
    useTodo.mockReturnValue({
        todos:[
            {
                id: 1,
                todo: 'Recolectar la gema del alma',
                done: false
            },
            {
                id: 2,
                todo: 'Recolectar la gema del infinito',
                done: false
            }
        ],
        todosCount: 2,
        pendingTodosCount: 0,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('Debe de mostrar el componente normalmente', () => {
        render(<TodoApp/>);

        expect(screen.getByText('Recolectar la gema del alma')).toBeTruthy();
        expect(screen.getByText('Recolectar la gema del infinito')).toBeTruthy();
    })
})